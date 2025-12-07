import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance/AttendancePage";
import SessionPlan from "./pages/SessionPlan/SessionPlanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/session" element={<SessionPlan />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
