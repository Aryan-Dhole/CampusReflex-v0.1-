import WelcomeBanner from "./components/WelcomeBanner";
import SessionPlanTable from "./components/SessionPlanTable";



export default function SessionPlan() {


    return (
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">
            <WelcomeBanner />
            <SessionPlanTable />
        </div>
    )
}