import { FileText } from "lucide-react";
import FileButton from "./FileButton";



export default function SessionPlanRow({ subject, uploaded, fileUrl }) {
    return (
        <div className="grid grid-cols-2 px-6 py-4 border-t border-gray-200 text-sm items-center">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-lg text-gray-700">{subject}</span>
            </div>

            <div className="flex justify-">
                <FileButton uploaded={uploaded} fileUrl={fileUrl} />
            </div>

        </div>
    )
}
