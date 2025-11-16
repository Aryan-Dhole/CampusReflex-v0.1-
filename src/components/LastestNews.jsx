import { ChevronRight } from "lucide-react";


export default function LatestNews() {
    const news = [
        {
            date: "Nov 14",
            title: "Mid-Semister Examination scedule released",
            desc: "Check your Exam timetable and prepare accrodingly."
        },
        {
            date: "Nov 12",
            title: "WorkShop on AI and Machine-Learning",
            desc: "Register now for the upcoming workshop on november 20."
        },
        {
            date: "Nov 10",
            title: "Sport registration day",
            desc: "Annual sports event sceduled for november 5."
        },
    ]

    return (
        <section className=" mt-12">

            {/* News List */}

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                {/* Hearder */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Latest News
                    </h2>
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                        View all <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="space-y-4">
                    {news.map((item, index) => (
                        <div key={index} className="flex gap-4 rounded-2xl px-6 py-3 items-start hover:opacity-90 hover:bg-gray-50 transition-colors cursor-pointer group">
                            {/* DateBadge */}
                            <div className="w-14 aspect-square bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex flex-col items-center justify-center text-white">
                                {item.date.split(" ")[0]}
                                <span className="text-sm opacity-90">{item.date.split(" ")[1]}</span>
                            </div>

                            {/* News Text */}

                            <div className="flex-1 min-w-0">
                                <p className="text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{item.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </section>
    )
}
