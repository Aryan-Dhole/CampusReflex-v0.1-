
import { X, AlertCircle, AlertTriangle, Info, Calendar } from "lucide-react";

export default function AlertSection() {
    const alerts = [
        {
            title: "Low Attendance Alert",
            desc: "You have defaulters in 3 subjects.",
            icon: AlertCircle,
            bg: "bg-red-50",
            text: "text-red-700",
            border: "border-red-300",

        },
        {
            title: "Upcoming Exam",
            desc: "Your LAC exam is sceduled for 20th Nov.",
            icon: Calendar,
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            border: "border-yellow-200",
        },
        {
            title: "Fee Payment Due",
            desc: "Your second installment Payment is pending.",
            icon: Info,
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            border: "border-yellow-200",
        }
    ]

    return (
        <section className="mt-12 border border-gray-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl flex items-center text-gray-800 mb-4">
                <div className="w-1 h-6 bg-red-600 rounded-full mr-3"></div>
                Alerts & Notifications!
            </h2>

            <div className="space-y-4">
                {alerts.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${item.border} ${item.bg} rounded-xl p-4 shadow-sm flex gap-3 items-start hover:shadow-md transition`}
                    >

                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center`}>
                            <item.icon className={` w-5 h-5 ${item.text}`} />
                        </div>

                        <div className="flex-1">
                            <p className={` ${item.text}`}>{item.title}</p>
                            <p className={`text-sm text-gray-600 mt-1`}>{item.desc}</p>
                        </div>

                        <button className="text-gray-400 hover:text-gray-600">
                            <X className="w-4 h-4" />

                        </button>
                    </div>
                ))

                }

            </div>
        </section>
    )
}


