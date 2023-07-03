import axios from "axios"

const instance = axios.create({
    baseURL: "https://realstate-web-app-backend.vercel.app/api/v1",
})

export default instance