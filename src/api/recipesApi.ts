import axios from 'axios';

export interface Recipe {
  title: string;
  userId: number;
  ingredients: string;
  description: string;
  cookingTime: number;
  userName: string;
}

// Base URL configuration (reuse if already defined)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get<Recipe[]>('http://localhost:5000/api/recipes');
    return response.data; // Return data directly, as it already matches the desired structure
  } catch (error: any) {
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