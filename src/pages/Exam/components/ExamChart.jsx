import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from "recharts";



export default function ExamChart({ subjectScores }) {

    const chartData = subjectScores.map((item) => ({
        name: item.subject,
        yourScore: item.yourScore,
        topper: item.topper,
        passing: item.passing
    }));


    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                    <linearGradient id="colorYourScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="colorTopper" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.3} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                    dataKey="name"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    angle={-15}
                    textAnchor="end"
                    height={80}
                />
                <YAxis
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    label={{ value: 'Marks', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                />
                <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                />
                <Bar
                    dataKey="yourScore"
                    fill="url(#colorYourScore)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={50}
                />
                <Bar
                    dataKey="topper"
                    fill="url(#colorTopper)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={50}
                />
                <Line
                    type="monotone"
                    dataKey="passing"
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#ef4444', r: 4 }}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )


}

