// Home.jsx

import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import ImportantLinks from "../components/ImportantLinks";
import LatestNews from "../components/LastestNews";
import AlertSection from "../components/AlertSection";
import UpcomingEvents from "../components/UpcomingEvents";

export default function Home() {
    return (
        <>
            <Hero />
            <StatsSection />

            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <ImportantLinks />
                    </div>

                    <div className="lg:col-span-1 space-y-4">
                        <LatestNews />
                        <UpcomingEvents />
                    </div>

                    <div className="lg:col-span-1">
                        <AlertSection />
                    </div>
                </div>
            </div>
        </>
    );
}
