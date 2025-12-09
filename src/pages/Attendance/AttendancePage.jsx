import { useState } from "react";
import AttendanceHero from "./components/AttendanceHero";
import AttendanceToggle from "./components/AttendanceToggle";
import AttendanceStats from "./components/AttendanceStats";
import AttendanceTable from "./components/AttendanceTable";
import AttendanceGraph from "./components/AttendanceGraph";

export default function AttendancePage() {

    const [mode, setMode] = useState("table"); // default

    const subjects = [
        { code: "EP", name: "Engineering Physics", percent: "76%", status: "Warning" },
        { code: "EPL", name: "Engineering Physics Lab", percent: "100%", status: "Good" },
        { code: "LAC", name: "Linear Algebra & Calculus", percent: "86%", status: "Good" },
        { code: "PSP", name: "Problem Solving with Programming", percent: "61%", status: "Low" },
        { code: "EM", name: "Engineering Mechanics", percent: "86%", status: "Good" },
        { code: "EML", name: "Mechanics Lab", percent: "74%", status: "Low" },
        { code: "SDL", name: "Skill Development Lab", percent: "86%", status: "Good" },
        { code: "CSE", name: "Cummunication Skill and Ethics", percent: "71%", status: "Low" },
        { code: "SPF-1", name: "Sports and Physical Fitness - I", percent: "86%", status: "Good" },
        { code: "IntP", name: "Integrated Perspective", percent: "86%", status: "Good" },
    ]
    const numericPercentages = subjects.map(item =>
        parseInt(item.percent.replace("%", ""))
    );

    const totalAverage =
        numericPercentages.reduce((sum, value) => sum + value, 0) /
        numericPercentages.length;



    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">

                <div className="mt-6">
                    <AttendanceHero />
                </div>

                <div className="mt-8">
                    <AttendanceToggle mode={mode} setMode={setMode} />
                </div>

                {/* TABLE VIEW */}
                {mode === "table" && (
                    <>
                        <AttendanceStats subjects={subjects} totalAverage={totalAverage} />
                        <AttendanceTable subjects={subjects} />
                    </>
                )}

                {/* GRAPH VIEW */}
                {mode === "schedule" && (
                    <AttendanceGraph />
                )}

            </div>
        </div>
    );
}
