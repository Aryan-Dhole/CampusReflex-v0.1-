import { Link, useLocation } from "react-router-dom";
import { Bell, LogOut, User } from "lucide-react";

export default function Navbar() {

    const location = useLocation();


    const navItems = [
        { name: "Home", path: "/" },
        { name: "Attendance", path: "/attendance" },
        { name: "Exam", path: "/exam" },
        { name: "Session Plan", path: "/session" },
        { name: "Fees", path: "/fees" },
        { name: "Semester", path: "/semester" },

    ];


    return (

        <header className="bg-white shadow-sm sticky top-0 z-50"
            key={location.pathname}>
            <div className="max-w-9xl mx-auto px-16 h-16 flex items-center justify-between">

                {/* logo and headers */}
                <div className=" flex items-center space-x-3">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <div className="hidden md:block ">
                        <h2 className="text-purple-700 tracking-wide font-semibold">CampusReflex</h2>
                        <p className="text-xs text-gray-500">Academic Year 2025-26</p>
                    </div>
                </div>

                {/* Navigation Tabs */}

                <nav className="hidden md:flex space-x-2">
                    {navItems.map((item) => (
                        <Link
                            to={item.path}
                            key={item.name}
                            className={`px-4 py-2 rounded-xl transition ${location.pathname === item.path
                                ? "bg-purple-100 text-purple-700 font-medium"
                                : "text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}

                <div className="flex items-center space-x-6">

                    <button className="realtive cursor-pointer">
                        <Bell className="w-6 h-6 text-gray-600 hover:text-purple-700 transition" />
                    </button>

                    <button className="p-2 bg-linear-to-r from-purple-300 to-blue-300 rounded-full cursor-pointer">
                        <User className="w-6 h-6 text-gray-100 hover:text-purple-600 transition" />
                    </button>

                    <button className="cursor-pointer">
                        <LogOut className="w-6 h-6 text-gray-600 hover:text-purple-700 transition" />
                    </button>
                </div>

            </div>
        </header>
    )
}


