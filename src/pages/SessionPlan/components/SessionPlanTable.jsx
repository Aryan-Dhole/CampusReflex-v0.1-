import SessonPlanRow from "./SessionPlanRow";


const data = [
    { subject: "ENGINEERING PHYSICS", uploaded: false },
    { subject: "LINEAR ALGEBRA AND CALCULUS", uploaded: false },
    { subject: "PROBLEM SOLVING WITH PROGRAMMING", uploaded: true },
    { subject: "ENGINEERING MECHANICS", uploaded: false },
    { subject: "COMMUNICATION SKILLS AND ETHICS", uploaded: false },
]

export default function SessionPlanTable() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border-gray-500 mt-6 overflow-hidden">

            <div className="grid grid-cols-2 px-6 py-4 bg-gray-50 text-sm font-semibold text-gray-700">
                <div>Subject</div>
                <div>Session Plan</div>
            </div>
            {data.map((item, index) => (
                <SessonPlanRow key={index} subject={item.subject} uploaded={item.uploaded} />
            ))

            }

        </div>
    )
}
