


export default function StatCard({ title,
    value,
    subtitle,
    icon = null,
    gradient = false,
    color = "text-gray-700" }) {


    return (
        <div className={`p-6 rounded-2xl hover:scale-105 transition shadow-sm border ${gradient
            ? "bg-linear-to-r from-purple-600 to-blue-600 text-white border-none shadow"
            : "bg-white border-gray-200"
            }`
        }>
            <div className="flex items-center gap-2">
                {icon && (
                    <span className={`${gradient ? "text-white" : color}`}>
                        {icon}
                    </span>
                )}
                <p className={`text-sm ${gradient ? "text-white/80" : "text-gray-600"}`}>
                    {title}
                </p>
            </div>

            <h2 className={`text-4xl font-semibold ${gradient ? "" : color}`}>
                {value}
            </h2>

            <p className={`text-sm mt-2 ${gradient ? "text-white/80" : "text-gray-500"}`}>
                {subtitle}
            </p>

        </div>
    )
}

