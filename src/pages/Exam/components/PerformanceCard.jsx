import { TrendingUp, TrendingDown, Award } from "lucide-react"


export default function PerformanceCard({ subject, passing, yourScore, topper, oufof }) {
    const percentage = (yourScore / oufof) * 100;
    const isPassing = yourScore >= passing;
    const isAboveAverage = yourScore > (passing + topper) / 2;

    return (
        <section className="bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-sm text-gray-600 mb-1">{subject}</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl text-gray-900">{yourScore}</span>
                        <span className="text-sm text-gray-500">/ {oufof}</span>
                    </div>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isPassing
                    ? 'bg-green-100'
                    : 'bg-red-100'
                    }`}>
                    {isPassing ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                    )}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-500 ${isPassing
                            ? 'bg-linear-to-r from-green-500 to-emerald-500'
                            : 'bg-linear-to-r from-red-500 to-orange-500'
                            }`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs">
                <div>
                    <span className="text-gray-500">Passing: </span>
                    <span className="text-gray-700">{passing}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-500" />
                    <span className="text-gray-500">Top: </span>
                    <span className="text-gray-700">{topper}</span>
                </div>
            </div>

            {/* Status Badge */}
            <div className="mt-3 pt-3 border-t border-gray-200">
                <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${isPassing
                    ? isAboveAverage
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    : 'bg-red-100 text-red-700'
                    }`}>
                    {isPassing
                        ? isAboveAverage
                            ? '🎉 Excellent'
                            : '✓ Passed'
                        : '⚠ Needs Improvement'}
                </span>
            </div>
        </section>
    )
}