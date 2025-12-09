import PerformanceCard from "./PerformanceCard"


export default function PerformanceOverview({ subjectScores }) {



    return (
        <div className="mb-8">
            <h2 className="text-gray-900 mb-4">Your Performance Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {subjectScores.map((subject, index) => (
                    <PerformanceCard key={index} {...subject} />
                ))}
            </div>
        </div>
    )
}
