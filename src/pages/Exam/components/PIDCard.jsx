import { Calendar, TrendingUp } from "lucide-react"
TrendingUp



export default function PIDCard() {

    const StudentData =
    {
        name: "ARYAN HARIDAS DHOLE",
        rollNo: "615",
        pid: "675732",
        program: "FE ELEC"
    }


    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 mb-8 mt-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                        <div>
                            <p className="text-sm text-gray-500">Program</p>
                            <p className="text=gray-900">{StudentData.program}</p>
                        </div>
                    </div>

                    <div className="h-8 w-0.5 bg-gray-200" />
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        <div>
                            <p className="text-xs text-gray-500">PID</p>
                            <p className="text-gray-900">{StudentData.pid}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


