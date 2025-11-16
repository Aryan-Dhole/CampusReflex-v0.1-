import { icons } from "lucide-react";


export default function LinkCard({ icon: Icon, label, tag, color }) {

    return (
        <div className="bg-white rounded-xl px-8 py-1 hover:bg-gray-100 transition ">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                    {Icon && (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${color.text}`} />
                        </div>
                    )}
                    <p className="text-gray-700 font-sans ">{label}</p>
                </div>
                {tag && (
                    <span className="text-sm bg-red-500 px-2 py-1 text-white  ml-3 rounded-md">
                        {tag}
                    </span>
                )}
            </div>
        </div>
    )
}