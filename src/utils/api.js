import axios from "axios";

const API_BASE = "http://localhost:5000";

export const getMe = async () => {
    const res = await axios.get(`${API_BASE}/api/me`);
    return res.data;
};
