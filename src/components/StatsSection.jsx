import { Calendar, TrendingUp, Award, Clock } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsSection() {
    const stats = [
        {
            icon: Calendar,
            value: "78%",
            lable: "Current Semester",
            color: { bg: "bg-blue-100", text: "text-blue-600" },
        },
        {
            icon: TrendingUp,
            value: "8.5",
            lable: "Overall Performance",
            color: { bg: "bg-green-100", text: "text-green-600" },
        },
        {
            icon: Award,
            value: "142",
            lable: "Credits Completed",
            color: { bg: "bg-purple-100", text: "text-purple-600" },
        },
        {
            icon: Clock,
            value: "2",
            lable: "Assisgnments Due",
            color: { bg: "bg-orange-100", text: "text-red-600" },
        }
    ]

    return (
        <section className=" max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (

                <StatCard
                    key={index}
                    icon={item.icon}
                    value={item.value}
                    lable={item.lable}
                    color={item.color}
                />

            ))}
        </section>
    )
}