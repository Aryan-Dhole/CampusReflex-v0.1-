

export default function PercentBadge({ value }) {

    const num = parseInt(value);
    let color = "bg-gray-200 text-gray-800";

    if (num >= 85) color = "bg-green-100 border-green-300 text-green-900"
    else if (num >= 75) color = "bg-yellow-100 border-yellow-300 text-yellow-900"
    else color = "bg-red-100 border-red-300 text-red-900"

    return (
        <span className={`px-3 py-1 rounded-full text-sm border font-normal ${color}`}>
            {value}
        </span>
    )

}


