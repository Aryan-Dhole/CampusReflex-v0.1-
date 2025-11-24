import { User, GraduationCap } from "lucide-react"


export default function AtendanceHero() {

    return (
        <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start justify-between">
                <div className="flex- items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-xl font-semibold">
                        AD
                    </div>
                </div>
                <div >
                    <h2 className="text-2xl font-semibold">
                        Welcome, Aryan Haridas Dhole
                    </h2>
                    <div className="flex items-center gap-4 text-white/90">
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            Roll No:
                        </span>
                        <span className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            Basic Science and Humanities Department
                        </span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">From: 7/1/2025 To 12/31/2025</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-sm text-white/80">Overall Attendance</p>
                <p className="text-4xl">82%</p>

            </div>

        </div >
    )
} 