import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; 

const api = axios.create({
    baseURL: BASE_URL,
});

export const getProductByCategory = async (category) => {
    try {
        const response = await api.get(`http://localhost:8000/cake/category/${category}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

