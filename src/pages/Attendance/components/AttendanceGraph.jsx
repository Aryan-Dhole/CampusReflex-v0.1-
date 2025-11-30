import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";


export default function AttendanceGraph() {

    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const hours = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM"
    ];

    // Temporary demo data — pure layout, no logic.
    const events = [
        {
            day: "MON",
            start: "9:00 AM",
            end: "11:00 AM",
            title: "CS Lab",
            room: "Lab 301",
            status: "present" // green
        },
        {
            day: "MON",
            start: "11:00 AM",
            end: "12:00 PM",
            title: "SDL Lab",
            room: "Lab 205",
            status: "present"
        },
        {
            day: "TUE",
            start: "10:15 AM",
            end: "12:15 PM",
            title: "LAC Lec",
            room: "Room 402",
            status: "present"
        },
        {
            day: "WED",
            start: "9:00 AM",
            end: "10:00 AM",
            title: "SPF Lec",
            room: "Room 101",
            status: "absent" // red
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12">

            <div className="flex items-center justify-between mb-6">
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
            <div className="grid grid-cols-8 border-t border-l">
                <div className="border-r bg-white"></div>
                {days.map((d) => (
                    <div
                        key={d}
                        className="border-r p-3 text-center font-medium text-gray-700 bg-gray-50"
                    >
                        {d}
                    </div>
                ))}
            </div>

            {/* Time + Grid */}
            <div className="grid grid-cols-8 border-l">

                {/* Time column */}
                <div className="border-r">
                    {hours.map((h) => (
                        <div
                            key={h}
                            className="h-20 border-b flex items-start px-2 pt-1 text-xs text-gray-500"
                        >
                            {h}
                        </div>
                    ))}
                </div>

                {/* 7-Day Grid */}
                {days.map((day) => (
                    <div key={day} className="border-r relative">

                        {hours.map((_, i) => (
                            <div
                                key={i}
                                className="h-20 border-b"
                            ></div>
                        ))}

                        {/* EVENTS */}
                        {events
                            .filter((e) => e.day === day)
                            .map((ev, i) => (
                                <div
                                    key={i}
                                    className={`
                                        absolute left-2 right-2 rounded-xl p-2 text-sm shadow-sm
                                        ${ev.status === "present" ? "bg-green-100 border-green-300 text-green-800" : "bg-red-100 border border-red-300 text-red-800"}
                                    `}
                                    style={{
                                        top: calcTop(ev.start),
                                        height: calcHeight(ev.start, ev.end)
                                    }}
                                >
                                    <div className="font-semibold text-gray-800">{ev.title}</div>
                                    <div className="text-xs text-gray-600">{ev.room}</div>
                                    <div className="text-xs mt-1 text-gray-700">
                                        {ev.start} - {ev.end}
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}

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

    return `${((totalMinutes - startOfGrid) / 60) * 80}px`; // 80px per hour row
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
