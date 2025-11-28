import PercentBadge from "./PercentageBadge"
import StatusBadge from "./StatusBadge"

export default function SubjectRow({ code, name, percent, status }) {

    return (
        <tr className=" border-b last:border-b-0 border-gray-200 hover:bg-gray-50 transition odd:bg-gray-50/30">
            <td className="py-3 px-4 font-medium">{code}</td>
            <td className="py-3 px-4 text-gray-700">{name}</td>
            <td className="py-3 px-4">
                <PercentBadge value={percent} />
            </td>
            <td className="py-3 px-4">
                <StatusBadge status={status} /></td>
        </tr>
    )
}

