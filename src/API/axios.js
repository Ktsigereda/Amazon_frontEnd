import axios from "axios"
export const axiosInstance = axios.create({
    baseURL:"https://amazon-api-deploy-raw7.onrender.com",
    // baseURL:"http://localhost:2011",
});


