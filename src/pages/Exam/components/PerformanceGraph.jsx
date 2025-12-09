import ExamChart from "./ExamChart"



export default function PerformanceGraph({ subjectScores }) {



    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-gray-900 mb-6">Where you are MSE</h2>
            <ExamChart subjectScores={subjectScores} />
        </div >
    )
}

