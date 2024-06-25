// MainService.jsx

import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // Adjust as needed
});

export const createLogin = async (username, password) => {
    try {
        const response = await axiosInstance.post('/login', {
            username: username,
            password: password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
