import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/recipesApi'; // Import Axios instance or API function
import Input from '../components/Input/Input'; // Adjust the path based on your project structure
import './Create.css';
import Button from '../components/Button/Button';

interface NewRecipe {
  title: string;
  ingredients: string[];
  description: string;
  cookingTime: number;
  userId: number;
}

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState<number | ''>('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const trimmedIngredient = newIngredient.trim();

    if (trimmedIngredient && !ingredients.includes(trimmedIngredient)) {
      setIngredients((prev) => [...prev, trimmedIngredient]);
    }

    setNewIngredient('');
    ingredientInput.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !cookingTime || ingredients.length === 0) {
      alert('Please fill out all fields.');
      return;
    }

    const newRecipe: NewRecipe = {
      title,
      ingredients,
      description,
      cookingTime: Number(cookingTime),
      userId: 2, // Replace with dynamic user context if needed
    };

    try {
      // Post the recipe to the backend
      await api.post('/recipes', newRecipe);

      // Navigate to the recipes page on success
      navigate('/recipes');
    } catch (error: any) {
      console.error('Error creating recipe:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to create recipe. Please try again.');
    }
  };

  return (
    <div className="create">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>

        <Input
          label="Recipe Title"
          id="title"
          name="title"
          type="text"
          placeholder="Enter recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Ingredients */}
        <label>
          <div className="ingredients">
            <Input
              label="Add Ingredient"
              id="ingredient"
              name="ingredient"
              type="text"
              placeholder="Enter an ingredient"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              autoComplete="off"
            />
            <button onClick={handleAddIngredient} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>

        {/* Recipe Description */}
            <Input
              label="Recipe Description"
              id="description"
              name="description"
              isTextarea={true}
              placeholder="Describe the recipe..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5}
            />

        {/* Cooking Time */}
        <Input
          label="Cooking Time (minutes)"
          id="cookingTime"
          name="cookingTime"
          type="number"
          placeholder="Enter cooking time"
          value={cookingTime.toString()}
          onChange={(e) => setCookingTime(Number(e.target.value))}
          required
        />

        <Button
          label="Create recipe"
          type="submit"
          />
      </form>
    </div>
  );
};

export default Create;