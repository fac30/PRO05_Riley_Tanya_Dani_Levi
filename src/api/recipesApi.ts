import axios from 'axios';

export interface Recipe {
  title: string;
  userId: number;
  ingredients: string;
  description: string;
  cookingTime: number;
  username: string;
}

export interface NewRecipe {
  title: string;
  ingredients: string[];
  description: string;
  cookingTime: number;
  userId: number;
}

// Base URL from environment variables or fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5210';

// Axios instance for centralized configuration
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all recipes
export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await api.get<Recipe[]>('/recipes');
    console.log(response.data)
    return response.data; // Return data directly
  } catch (error: any) {
    console.error('Error fetching recipes:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch recipes');
  }
};

// Create a new recipe
export const createRecipe = async (newRecipe: NewRecipe): Promise<void> => {
  try {
    await api.post('/recipes', newRecipe);
  } catch (error: any) {
    console.error('Error creating recipe:', error);
    throw new Error(error.response?.data?.message || 'Failed to create recipe');
  }
};
