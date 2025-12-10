import { Check, X, Clock, Calendar } from 'lucide-react';



export default function ResultsTable({ data, type, title }) {


    return (
        <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-linear-to-r from-indigo-50 to-purple-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">
                                    Exam
                                </th>
                                <th className="px-4 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">
                                    Subject
                                </th>
                                <th className="px-4 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">
                                    Teacher
                                </th>
                                <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                    Total
                                </th>
                                {type === "result" ? (
                                    <>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            Pass
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            Fail
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            Absent
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            N/A
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            Not Entered
                                        </th>
                                    </>
                                ) : (
                                    <>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            &gt; 70%
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            60-70%
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            50-60%
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            40-50%
                                        </th>
                                        <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                            &lt; 40%
                                        </th>
                                    </>
                                )}
                                <th className="px-4 py-3 text-center text-xs text-gray-700 uppercase tracking-wider">
                                    Last Updated
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-indigo-100 text-indigo-800">
                                            {row.examName}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">
                                        {row.subject}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-700">
                                        {row.teacherName}
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
                                            {row.total}
                                        </span>
                                    </td>
                                    {type === 'result' ? (
                                        <>
                                            <td className="px-4 py-4 text-center">
                                                {row.pass !== undefined && row.pass > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">
                                                        {row.pass}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.fail !== undefined && row.fail > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700">
                                                        {row.fail}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.absent !== undefined && row.absent > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700">
                                                        {row.absent}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center text-sm text-gray-700">
                                                {row.notApplicable || 0}
                                            </td>
                                            <td className="px-4 py-4 text-center text-sm text-gray-700">
                                                {row.notEntered || 0}
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="px-4 py-4 text-center">
                                                {row.gt70 !== undefined && row.gt70 > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700">
                                                        {row.gt70}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.between60_70 !== undefined && row.between60_70 > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">
                                                        {row.between60_70}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.between50_60 !== undefined && row.between50_60 > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700">
                                                        {row.between50_60}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.between40_50 !== undefined && row.between40_50 > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700">
                                                        {row.between40_50}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                {row.lt40 !== undefined && row.lt40 > 0 ? (
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700">
                                                        {row.lt40}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                        </>
                                    )}
                                    <td className="px-4 py-4 text-center">
                                        <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            {row.lastDate}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

