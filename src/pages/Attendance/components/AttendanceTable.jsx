import PercentBadge from "./PercentageBadge"
import SubjectRow from "./SubjectRow"


export default function AttendanceTable({ subjects }) {

    const numericPercentages = subjects.map(item =>
        parseInt(item.percent.replace("%", ""))
    );

    const totalAverage =
        numericPercentages.reduce((sum, value) => sum + value, 0) /
        numericPercentages.length;
    return (
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-200 overflow-x-auto">
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
                    {subjects.map((row, index) => (
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
                            <PercentBadge value={`${Math.round(totalAverage)}%`} />
                        </td>
                        <td className="py-4 px-4"></td>
                    </tr>


                </tbody>

            </table>

        </div>
    )
}