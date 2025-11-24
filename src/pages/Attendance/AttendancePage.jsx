import AttendanceToggle from "./components/AttendanceToggle"
import AttendanceHero from "./components/AttendanceHero"
import AttendanceStats from "./components/AttendanceStats"
import AttendanceTable from "./components/AttendanceTable"
import AttendanceGraph from "./components/AttendanceGraph"
import { useState } from "react"


export default function AttendancePage() {
    const [mode, setMode] = useState("table");

    return (
        <div className="max-w-8xl mx-auto px-6 space-y-8">

            <AttendanceHero />
            <AttendanceToggle mode={mode} setmode={setMode} />



            {mode === "table" && (
                <>
                    <AttendanceStats />
                    <AttendanceTable />
                </>
            )}

            {mode === "schedule" && <AttendanceGraph />}


            <AttendanceTable />
        </div>
    );
}



