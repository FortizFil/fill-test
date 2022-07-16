import axios from "axios";
import {BACKEND_URL} from "constans/API"


export const axiosConfig = axios.create({
    baseURL:BACKEND_URL,
    headers:{
        "Content-Type":"application/json"
    }
})