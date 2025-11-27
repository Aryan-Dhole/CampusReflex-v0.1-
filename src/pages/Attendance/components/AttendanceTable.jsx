import PercentBadge from "./PercentageBadge"
import SubjectRow from "./SubjectRow"


export default function AttendanceTable() {

    const data = [
        { code: "EP", name: "Engineering Physics", percent: "78%", status: "Warning" },
        { code: "EPL", name: "Engineering Physics Lab", percent: "100%", status: "Good" },
        { code: "LAC", name: "Linear Algebra & Calculus", percent: "86%", status: "Good" },
        { code: "PSP", name: "Problem Solving with Programming", percent: "61%", status: "Low" },
        { code: "EM", name: "Engineering Mechanics", percent: "86%", status: "Good" },
        { code: "EML", name: "Mechanics Lab", percent: "71%", status: "Low" },
        { code: "SDL", name: "Sustainable Development Lab", percent: "86%", status: "Good" },
        { code: "CSE", name: "Computer Science Essentials", percent: "71%", status: "Low" },
        { code: "SPF-1", name: "Skill Practice Forum 1", percent: "86%", status: "Good" },
        { code: "IntP", name: "Internship Program", percent: "86%", status: "Good" },
    ]

    return (
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full rounded-xl overflow-hidden">
                <thead>
                    <tr className="text-left text-gray-600 border-b">
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
                    ))
                    }
                    <tr className="bg-purple-100 font-medium text-purple-800">
                        <td className="py-4 px-4">Total Average</td>
                        <td className="py-4 px-4"></td>
                        <td className="py-4 px-4">
                            <PercentBadge value="82%" />
                        </td>
                        <td className="py-4 px-4"></td>
                    </tr>


                </tbody>

            </table>

        </div>
    )
}