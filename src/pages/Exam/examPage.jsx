import PIDCard from "./components/PIDCard"
import PerformanceOverview from "./components/PerformanceGrid"


export default function Exam() {

    return (
        <section className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <PIDCard />
                <PerformanceOverview />
            </div>
        </section>
    )
}