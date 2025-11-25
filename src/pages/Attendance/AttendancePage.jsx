import { useState } from "react";
import AttendanceHero from "./components/AttendanceHero";
import AttendanceToggle from "./components/AttendanceToggle";
import AttendanceStats from "./components/AttendanceStats";
import AttendanceTable from "./components/AttendanceTable";
import AttendanceGraph from "./components/AttendanceGraph";

export default function AttendancePage() {

    const [mode, setMode] = useState("table"); // default

    return (
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">

            <AttendanceHero />

            <AttendanceToggle mode={mode} setMode={setMode} />

            {/* TABLE VIEW */}
            {mode === "table" && (
                <>
                    <AttendanceStats />
                    <AttendanceTable />
                </>
            )}

            {/* GRAPH VIEW */}
            {mode === "schedule" && (
                <AttendanceGraph />
            )}

        </div>
    );
}
