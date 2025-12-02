import { Eye } from "lucide-react"



export default function FileButton({ uploaded, fileUrl }) {
    if (!uploaded) {
        return (
            <span className="text-gray-400 italic">
                Not Uploaded
            </span>
        )
    }

    const openFile = () => {
        window.open(fileUrl, "_blank");
    };

    return (
        <a href={fileUrl}
            onClick={openFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
        >
            <Eye className="h-4 w-4" />
            View File
        </a >
    )
}