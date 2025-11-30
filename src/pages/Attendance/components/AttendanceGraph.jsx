import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";


export default function AttendanceGraph() {

    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const hours = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM", "6:00 PM"
    ];

    // HardCoded Data temporary
    const events = [
        {
            day: "MON",
            start: "9:00 AM",
            end: "11:00 AM",
            title: "EP Lab",
            room: "Lab 610",
            status: "present"
        },
        {
            day: "MON",
            start: "11:00 AM",
            end: "12:00 PM",
            title: "SDL Lab",
            room: "Lab 002B",
            status: "present"
        },
        {
            day: "TUE",
            start: "10:15 AM",
            end: "12:15 PM",
            title: "LAC Lec",
            room: "Room 729",
            status: "present"
        },
        {
            day: "WED",
            start: "9:00 AM",
            end: "10:00 AM",
            title: "SPF-1 Lec",
            room: "Room 028",
            status: "absent"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">

            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-gray-600" />
                    <h2 className="text-xl">Class Schedule</h2>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
                        <ChevronLeft />
                    </button>
                    <h2 className="text-xl text-gray-800">
                        Nov 23 - 29, 2025
                    </h2>
                    <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Days Row */}
            <div className="grid grid-cols-8 gap-2 mb-2">
                <div className="bg-white"></div>
                {days.map((d) => (
                    <div
                        key={d}
                        className=" p-3 text-center border border-gray-300 rounded-2xl font-medium text-gray-800 bg-gray-50"
                    >
                        {d}
                    </div>
                ))}
            </div>

            {/* Time + Grid */}
            <div className="grid grid-cols-8 gap-2 mb-2">

                {/* Time column */}
                <div>
                    {hours.map((h) => (
                        <div
                            key={h}
                            className="h-20 flex items-center justify-end pr-3 text-xs text-gray-500"
                        >
                            {h}
                        </div>
                    ))}
                </div>

                {/* 7-Day Grid */}
                {days.map((day) => (
                    <div key={day} className="relative space-y-2">

                        {hours.map((t, i) => (
                            <div
                                key={`${day}-${t}`}
                                className="h-16 border border-gray-100 rounded bg-gray-50/30"
                            ></div>
                        ))}

                        {/* EVENTS */}
                        {events
                            .filter((e) => e.day === day)
                            .map((ev, i) => (
                                <div
                                    key={i}
                                    className={`
                                        absolute left-0 right-0 border-2 rounded-lg p-2 
                                        ${ev.status === "present" ? "bg-green-100 border-green-300 text-green-800" : "bg-red-100 border border-red-300 text-red-800"}
                                    `}
                                    style={{
                                        top: calcTop(ev.start),
                                        height: calcHeight(ev.start, ev.end)
                                    }}
                                >
                                    <div className="text-xs overflow-hidden">
                                        <div>{ev.title}</div>
                                        <div className="text-xs opacity-75">{ev.room}</div>
                                        <div className="text-xs opacity-60 mt-1">
                                            {ev.start} - {ev.end}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}

            </div>

            <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-100 border-2 border-green-300"></div>
                    <span className="text-sm text-gray-600">Attended</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-100 border-2 border-red-300"></div>
                    <span className="text-sm text-gray-600">Absent</span>
                </div>
            </div>

        </div>
    );
}

/* Utility to convert time → pixel offset */
function calcTop(time) {
    const [hour, min, part] = time.split(/[: ]/);
    let h = parseInt(hour);
    if (part === "PM" && h !== 12) h += 12;
    const totalMinutes = h * 60 + parseInt(min);
    const startOfGrid = 8 * 60; // 8:00 AM

    return `${((totalMinutes - startOfGrid) / 60) * 86}px`; // 80px per hour row
}

/* Utility to compute height of an event block */
function calcHeight(start, end) {
    const mins = (t) => {
        const [hour, min, part] = t.split(/[: ]/);
        let h = parseInt(hour);
        if (part === "PM" && h !== 12) h += 12;
        return h * 60 + parseInt(min);
    };
    const diff = mins(end) - mins(start);
    return `${(diff / 60) * 80}px`;
}
