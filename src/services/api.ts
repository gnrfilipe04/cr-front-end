import axios from "axios";

let baseURL = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_BASE_URL : process.env.NEXT_PUBLIC_PRD_BASE_URL

const api = axios.create({
    baseURL 
})

export default api