import SessionPlanRow from "./SessionPlanRow";


const data = [
    { subject: "ENGINEERING PHYSICS", uploaded: false, fileUrl: null },
    { subject: "LINEAR ALGEBRA AND CALCULUS", uploaded: false, fileUrl: null },
    { subject: "PROBLEM SOLVING WITH PROGRAMMING", uploaded: true, fileUrl: "/public/session-plans/dummy.pdf" },
    { subject: "ENGINEERING MECHANICS", uploaded: false, fileUrl: null },
    { subject: "COMMUNICATION SKILLS AND ETHICS", uploaded: false, fileUrl: null },
]

export default function SessionPlanTable() {
    return (
        <div className="bg-white rounded-2xl shadow-sm mt-6 overflow-hidden">

            <div className="grid grid-cols-2 px-6 py-4 bg-gray-50 text-sm font-semibold text-gray-700">
                <div>Subject</div>
                <div>Session Plan</div>
            </div>
            {data.map((item, index) => (
                <SessionPlanRow key={index} subject={item.subject} uploaded={item.uploaded} fileUrl={item.fileUrl} />
            ))

            }

        </div>
    )
}
