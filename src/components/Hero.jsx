import { useEffect, useState } from "react"
import { getMe } from "../utils/api"


export default function Hero() {

    const [me, setMe] = useState(null);

    useEffect(() => {
        getMe().then(setMe).catch(console.error);
    }, []);

    const studentName = me?.name;

    return (
        <section className="max-w-7xl mx-auto px-6 mt-8">
            <div className="bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl p-10 shadow-lg text-white ">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    {me ? <h1>Welcome back, {me.name}!</h1> : <p>Welcome back, Loading...</p>}

                </h1>
                <p className="mt-2 text-gray-200">
                    Here's what's happening with your academics today.
                </p>
            </div>

        </section>
    )
}