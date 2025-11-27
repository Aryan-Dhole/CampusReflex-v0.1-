

export default function StatusBadge({ status }) {

    let color = "bg-gray-200 text-gray-800"

    if (status === "Good") color = "bg-green-100 border-green-300 text-green-800"
    else if (status === "Low") color = "bg-red-100 border-red-300 text-red-800"
    else if (status === "Warning") color = "bg-yellow-100 border-yellow-300 text-yellow-800"


    return (
        <span className={`px-3 py-1 rounded-xl text-sm border ${color}`}>
            {status}
        </span>
    )


}


