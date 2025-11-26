

export default function SubjectRow({ code, name, percent, status }) {

    return (
        <tr className=" border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-4 font-medium">{code}</td>
            <td className="py-3 px-4 text-gray-700">{name}</td>
            <td className="py-3 px-4">{percent}</td>
            <td className="py-3 px-4">{status}</td>
        </tr>
    )
}

