import axios from 'axios';

export interface Recipe {
  title: string;
  userId: number;
  ingredients: string;
  description: string;
  cookingTime: number;
  userName: string;
}

// Base URL from environment variables or fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5210';

// Axios instance for centralized configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all recipes
export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>('/recipes');
    return response.data; // Return data directly
  } catch (error: any) {
    console.error('Error fetching recipes:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch recipes');
  }
};

// Fetch a recipe by ID (example for extensibility)
export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const response = await api.get<Recipe>(`/recipes/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    throw new Error(error.response?.data?.message || 'Failed to fetch recipe');
  }
};