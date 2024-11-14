import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust with your backend URL

export const signup = async (name: string, email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { name, email, password });
};

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};