import axios from "axios"

const instance = axios.create({
    baseURL: "https://real-backend.onrender.com/api/v1/",
    // https://realstate-web-app-backend.vercel.app/api/v1
})

export const signUp = (data) => instance.post("/auth/register", data);
export const Adminlogin = (data) => instance.post("/auth/login", data);
export const setotp = (user1)=>instance.post("/auth/setotp",user1);
export const commentpost = (data)=>instance.post("/auth/comment",data);
export const getdata = (idd)=>instance.post("/auth/getcomments",idd);
export const postreply = (data2)=>instance.post("/auth/postreply",data2);

export default instance