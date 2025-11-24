export default function AttendanceToggle({ mode, setMode }) {
    const tabs = [
        { id: "table", label: "Table View", icon: "📋" },
        { id: "schedule", label: "Schedule", icon: "📅" },
    ];

    return (
        <div className="w-full flex justify-center mt-4">
            <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-2xl px-2 py-1 space-x-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setMode(tab.id)}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                            ${mode === tab.id
                                ? "bg-black text-white shadow"
                                : "text-gray-700 hover:bg-gray-100"
                            }
                        `}
                    >
                        <span>{tab.icon}</span> {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
