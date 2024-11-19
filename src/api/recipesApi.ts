import axios from 'axios';

// Base URL configuration (reuse if already defined)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all recipes
export const fetchRecipes = async () => {
  try {
    const response = await api.get('/recipes');
    return response.data; // Assuming backend responds with recipes in `data`
  } catch (error: any) {
    // Handle errors gracefully
    throw new Error(error.response?.data?.message || 'Failed to fetch recipes');
  }
};

// Export other recipe-related API functions as needed
export const fetchRecipeById = async (id: string) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch recipe');
  }
};