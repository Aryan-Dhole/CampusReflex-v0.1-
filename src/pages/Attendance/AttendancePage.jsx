import AttendanceToggle from "./components/AttendanceToggle"
import AttendanceHero from "./components/AttendanceHero"
import AttendanceStats from "./components/AttendanceStats"
import AttendanceTable from "./components/AttendanceTable"
import AttendanceGraph from "./components/AttendanceGraph"



export default function AttendancePage() {
    return (
        <div className="max-w-7xl mx-auto px-6 space-y-8">
            <h1 className="text-3xl font-bold mt-6">Attendance Page</h1>
            <p className="text-gray-600">Under Construction</p>

            <AttendanceHero />
            <AttendanceToggle />

            <AttendanceToggle />
            <AttendanceTable />
        </div>
    );
}



