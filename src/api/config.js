import axios from "axios"

const instance = axios.create({
    baseURL: "https://real-backend.onrender.com/api/v1/",
    // https://realstate-web-app-backend.vercel.app/api/v1
})

export const signUp = (data) => instance.post("/auth/register", data);
export const Adminlogin = (data) => instance.post("/auth/login", data);

export default instance