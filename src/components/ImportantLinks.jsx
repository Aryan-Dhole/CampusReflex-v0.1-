import LinkCard from "./LinkCard";
import { FileText, Download, Link2, CreditCard, BookOpen } from "lucide-react";


export default function ImportantLinks() {
    const links = [
        {
            label: "Download SFIT Matlab",
            icon: Download,
            color: { text: "text-blue-600" },
            tag: "New",
        },
        {
            label: "Online Payment Details",
            icon: CreditCard,
            color: { text: "text-green-600" },
        },
        {
            label: "Apply For Grace Attendance",
            icon: Link2,
            color: { text: "text-purple-600" },
        },
        {
            label: "Mentor Form",
            icon: BookOpen,
            color: { text: "text-orange-600" },
        },
    ]

    return (
        <section className="mt-12 border border-gray-100 p-6 rounded-2xl shadow ">
            <h2 className="text-xl  text-gray-800 flex items-center mb-4">
                <div className="w-1 h-6 rounded-2xl bg-purple-700 mr-2"></div>
                Important Links
            </h2>

            <div className="space-y-1">
                {links.map((item, index) => (
                    <LinkCard
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        color={item.color}
                        tag={item.tag}
                    />
                ))}
            </div>
        </section>
    )
}
