import PIDCard from "./components/PIDCard"
import PerformanceOverview from "./components/PerformanceGrid"
import PerformanceGraph from "./components/PerformanceGraph"


export default function Exam() {

    const subjectScores = [
        {
            subject: "CSE(MSE)",
            passing: 8,
            yourScore: 14,
            topper: 20,
            oufof: 20
        },
        {
            subject: "EM(MSE)",
            passing: 8,
            yourScore: 19,
            topper: 20,
            oufof: 20
        },
        {
            subject: "EP(MSE)",
            passing: 6,
            yourScore: 6,
            topper: 15,
            oufof: 15
        },
        {
            subject: "LAC(MSE)",
            passing: 0,
            yourScore: 18,
            topper: 20,
            oufof: 20
        },
        {
            subject: "PSP(MSE)",
            passing: 0,
            yourScore: 11,
            topper: 15,
            oufof: 15
        }
    ]

    return (
        <section className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <PIDCard subjectScores={subjectScores} />
                <PerformanceOverview subjectScores={subjectScores} />
                <PerformanceGraph subjectScores={subjectScores} />
            </div>
        </section>
    )
}