
// DashBoard

const alerts = [
    {
        title: "Low Attendance Alert",
        desc: "You have defaulters in 3 subjects.",
        icon: AlertCircle,
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-300",

    },
    {
        title: "Upcoming Exam",
        desc: "Your LAC exam is scheduled for 20th Nov.",
        icon: Calendar,
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200",
    },
    {
        title: "Fee Payment Due",
        desc: "Your second installment Payment is pending.",
        icon: Info,
        bg: "bg-yellow-50",
        text: "text-yellow-700",
        border: "border-yellow-200",
    }
]

const links = [
    {
        label: "Download SFIT Matlab",
        icon: Download,
        color: { text: "text-blue-600" },
        tag: "New",
    },
    {
        label: "Online Payment Details",
        icon: CreditCard,
        color: { text: "text-green-600" },
    },
    {
        label: "Apply For Grace Attendance",
        icon: Link2,
        color: { text: "text-purple-600" },
    },
    {
        label: "Mentor Form",
        icon: BookOpen,
        color: { text: "text-orange-600" },
    },
]

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

const stats = [
    {
        icon: Calendar,
        value: "78%",
        label: "Current Semester",
        color: { bg: "bg-blue-100", text: "text-blue-600" },
    },
    {
        icon: TrendingUp,
        value: "8.5",
        label: "Overall Performance",
        color: { bg: "bg-green-100", text: "text-green-600" },
    },
    {
        icon: Award,
        value: "142",
        label: "Credits Completed",
        color: { bg: "bg-purple-100", text: "text-purple-600" },
    },
    {
        icon: Clock,
        value: "2",
        label: "Assignments Due",
        color: { bg: "bg-orange-100", text: "text-red-600" },
    }
]

const events = [
    {
        title: "Technical Symposium",
        date: "Nov 18, 2025",
        time: "10:00 AM",
        location: "Main Auditorium",
    },
    {
        title: "Carrier Guidance Session",
        date: "Nov 22, 2025",
        time: "2:00 PM",
        location: "Conference Hall",
    }
]

// Attendance

const subjects = [
    { code: "EP", name: "Engineering Physics", percent: "76%", status: "Warning" },
    { code: "EPL", name: "Engineering Physics Lab", percent: "100%", status: "Good" },
    { code: "LAC", name: "Linear Algebra & Calculus", percent: "86%", status: "Good" },
    { code: "PSP", name: "Problem Solving with Programming", percent: "61%", status: "Low" },
    { code: "EM", name: "Engineering Mechanics", percent: "86%", status: "Good" },
    { code: "EML", name: "Mechanics Lab", percent: "74%", status: "Low" },
    { code: "SDL", name: "Skill Development Lab", percent: "86%", status: "Good" },
    { code: "CSE", name: "Cummunication Skill and Ethics", percent: "71%", status: "Low" },
    { code: "SPF-1", name: "Sports and Physical Fitness - I", percent: "86%", status: "Good" },
    { code: "IntP", name: "Integrated Perspective", percent: "86%", status: "Good" },
]

const temporaryevents = [
    {
        day: "MON",
        start: "9:00 AM",
        end: "11:00 AM",
        title: "EP Lab",
        room: "Lab 610",
        status: "present"
    },
    {
        day: "MON",
        start: "11:00 AM",
        end: "12:00 PM",
        title: "SDL Lab",
        room: "Lab 002B",
        status: "present"
    },
    {
        day: "TUE",
        start: "10:15 AM",
        end: "12:15 PM",
        title: "LAC Lec",
        room: "Room 729",
        status: "present"
    },
    {
        day: "WED",
        start: "9:00 AM",
        end: "10:00 AM",
        title: "SPF-1 Lec",
        room: "Room 028",
        status: "absent"
    }
];

// Exam
const StudentData =
{
    name: "ARYAN HARIDAS DHOLE",
    rollNo: "615",
    pid: "675732",
    program: "FE ELEC"
}

const subjectScores = [
    {
        subject: "CSE(MSE)",
        passing: 8,
        yourScore: 14,
        topper: 20,
        oufOf: 20
    },
    {
        subject: "EM(MSE)",
        passing: 8,
        yourScore: 19,
        topper: 20,
        oufOf: 20
    },
    {
        subject: "EP(MSE)",
        passing: 8,
        yourScore: 6,
        topper: 15,
        oufOf: 15
    },
    {
        subject: "LAC(MSE)",
        passing: 0,
        yourScore: 18,
        topper: 20,
        oufOf: 20
    },
    {
        subject: "PSP(MSE)",
        passing: 0,
        yourScore: 11,
        topper: 15,
        oufOf: 15
    }
]

const examResults = [
    {
        examName: "MSE",
        subject: "COMMUNICATION SKILLS AND ETHICS(CSE)",
        teacherName: "Ms. Faculty Name",
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
        teacherName: "Ms. Faculty Name",
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
        teacherName: "Mr. Instructor",
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
        teacherName: "Ms. Instructor",
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
        teacherName: "Mrs. Faculty Name",
        total: 1,
        pass: 1,
        fail: 0,
        absent: 0,
        notApplicable: 0,
        notEntered: 0,
        lastDate: "11 Nov"
    }
];

// Session Plan
const data = [
    { subject: "ENGINEERING PHYSICS", uploaded: false, fileUrl: null },
    { subject: "LINEAR ALGEBRA AND CALCULUS", uploaded: false, fileUrl: null },
    { subject: "PROBLEM SOLVING WITH PROGRAMMING", uploaded: true, fileUrl: "/public/session-plans/dummy.pdf" },
    { subject: "ENGINEERING MECHANICS", uploaded: false, fileUrl: null },
    { subject: "COMMUNICATION SKILLS AND ETHICS", uploaded: false, fileUrl: null },
]