

export default function StatCard({ icon: Icon, value, lable, color }) {

    return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow space-y-4 gap-4 border border-gray-100">
            {/* Icon Box */}

            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.bg}`} >
                <Icon className={`w-6 h-6 ${color.text}`} />
            </div>

            {/* Text */}
            <div>
                <p className="text-3xl mb-1">{value}</p>
                <p className="text-gray-600">{lable}</p>
            </div>
        </div>
    )
}
