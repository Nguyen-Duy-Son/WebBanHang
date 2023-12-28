import axios from 'axios';

export const register = async (data) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/v1/auth/register',
            data,
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const login = async (data) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/v1/auth/login',
            data,
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
