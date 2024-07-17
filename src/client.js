import axios from "axios";

export const client = axios.create({
    baseURL: 'http://18.191.172.74/api/v1/'
})