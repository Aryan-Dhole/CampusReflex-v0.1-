import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="text-white bg-gray-800 flex justify-between items-center px-8 py-4 shadow-md sticky top-0">
            <h1 className="text-xl font-bold tracking-wide"> Campus Reflex</h1>
            <ul className="flex gap-6">
                <li> <Link to="/" className="hover:text-green-600">Home</Link></li>
                <li> <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link></li>
                <li> <Link to="/notices" className="hover:text-green-600">Notices</Link></li>
            </ul>
        </nav>
    )
}


