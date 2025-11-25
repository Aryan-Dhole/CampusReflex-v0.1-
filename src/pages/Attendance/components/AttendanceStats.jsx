
import { AlertCircle, BarChart2, CheckCircle } from "lucide-react";
import StatCard from "./StatCard";

export default function AttendanceStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

            <StatCard
                icon={<BarChart2 size={18} />}
                title="Total Average Attendance"
                value="82%"
                subtitle="Across all subjects"
                gradient={true} // purple gradient

            />

            <StatCard
                title="Defaulters"
                value="3"
                subtitle="Subjects below 75%"
                color="text-red-500"
                icon={<AlertCircle size={18} />}
            />

            <StatCard
                title="Good Standing"
                value="8"
                subtitle="Subjects above 75%"
                color="text-green-600"
                icon={<CheckCircle size={18} />}
            />

        </div>
    );
}

