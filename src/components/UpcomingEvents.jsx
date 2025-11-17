
import { Calendar, Clock, MapPin } from "lucide-react";

export default function UpcomingEvents() {
    const events = [
        {
            title: "Technical Synopsium",
            date: "Nov 18, 2025",
            time: "10:00 AM",
            location: "Main Auditorium",
        },
        {
            title: "Carrier Guidance Session",
            date: "Nov 22, 2025",
            time: "2:00 PM",
            location: "Conference Hall",
        }
    ]

    return (
        <section className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-green-600 rounded-full mr-3"></div>
                Upcoming Events
            </h2>

            <div className=" space-y-4">
                {events.map((item, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-green-500 pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors cursor-pointer"
                    >
                        <h3 className="text-gray-900  mb-2">{item.title}</h3>
                        <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-2" />
                                {item.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Clock className="w-4 h-4 mr-2" />
                                {item.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {item.location}
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        </section>
    )
}