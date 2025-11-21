import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance/AttendancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
