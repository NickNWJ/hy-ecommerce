import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://hy-ecommerce-app.herokuapp.com/"
})