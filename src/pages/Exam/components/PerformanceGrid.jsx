import PerformanceCard from "./PerformanceCard"


export default function PerformanceOverview() {

    const subjectScores = [
        {
            subject: "CSE(MSE)",
            passing: 8,
            yourScore: 15,
            topper: 20,
            oufof: 25
        },
        {
            subject: "EM(MSE)",
            passing: 8,
            yourScore: 19,
            topper: 21,
            oufof: 25
        },
        {
            subject: "EP(MSE)",
            passing: 8,
            yourScore: 6,
            topper: 16,
            oufof: 25
        },
        {
            subject: "LAC(MSE)",
            passing: 8,
            yourScore: 18,
            topper: 20,
            oufof: 25
        },
        {
            subject: "PSP(MSE)",
            passing: 8,
            yourScore: 11,
            topper: 15,
            oufof: 25
        }
    ]

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
