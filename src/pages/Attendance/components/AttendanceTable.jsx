import { Percent } from "lucide-react"
import SubjectRow from "./SubjectRow"


export default function AttendanceTable() {

    const data = [
        { code: "EP", name: "Engineering Physics", percent: "78%", status: "Low" },
        { code: "EPL", name: "Engineering Physics Lab", percent: "100%", status: "Good" },
        { code: "LAC", name: "Linear Algebra & Calculus", percent: "86%", status: "Good" },
        { code: "PSP", name: "Problem Solving with Programming", percent: "78%", status: "Low" },
    ]

    return (
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-gray-600 border-b-gray-200">
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Subject Name</th>
                        <th className="py-3 px-4">Attendance %</th>
                        <th className="py-3 px-4">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <SubjectRow
                            key={index}
                            code={row.code}
                            name={row.name}
                            percent={row.percent}
                            status={row.status}
                        />
                    ))}
                </tbody>

            </table>

        </div>
    )
}