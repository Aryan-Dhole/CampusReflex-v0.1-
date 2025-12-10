import ResultsTable from "./ResultsTable";

export default function ResultSummary() {

    const examResults = [
        {
            examName: "MSE",
            subject: "COMMUNICATION SKILLS AND ETHICS(CSE)",
            teacherName: "Ms. DEEPA PANAKKAL",
            total: 1,
            pass: 1,
            fail: 0,
            absent: 0,
            notApplicable: 0,
            notEntered: 0,
            lastDate: "25 Nov"
        },
        {
            examName: "MSE",
            subject: "ENGINEERING MECHANICS(EM)",
            teacherName: "Ms. ARCHANA PANCHARYA",
            total: 1,
            pass: 1,
            fail: 0,
            absent: 0,
            notApplicable: 0,
            notEntered: 0,
            lastDate: "13 Nov"
        },
        {
            examName: "MSE",
            subject: "ENGINEERING PHYSICS(EP)",
            teacherName: "Mr. SUNIL THOMAS VARGHESE",
            total: 1,
            pass: 0,
            fail: 1,
            absent: 0,
            notApplicable: 0,
            notEntered: 0,
            lastDate: "21 Nov"
        },
        {
            examName: "MSE",
            subject: "LINEAR ALGEBRA AND CALCULUS(LAC)",
            teacherName: "Ms. ASMA SHOUKAT HAZIR",
            total: 1,
            pass: 1,
            fail: 0,
            absent: 0,
            notApplicable: 0,
            notEntered: 0,
            lastDate: "24 Nov"
        },
        {
            examName: "MSE",
            subject: "PROBLEM SOLVING WITH PROGRAMMING(PSP)",
            teacherName: "Mrs. HEENA SINGH",
            total: 1,
            pass: 1,
            fail: 0,
            absent: 0,
            notApplicable: 0,
            notEntered: 0,
            lastDate: "11 Nov"
        }
    ];

    return (
        <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
                <h2 className="text-gray-900 mb-4">Summary of Examination class of FE ELEC</h2>
                <ResultsTable
                    title="Result Summary"
                    data={examResults}
                    type="result"
                />
            </div>
        </div>
    )
}

