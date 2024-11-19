import React, { useState, useEffect } from 'react';
import { fetchRecipes, Recipe } from '../api/recipesApi';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes();
        setRecipes(data); // Set the fetched recipes
      } catch (err: any) {
        setError(err.message || 'Failed to load recipes');
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p><strong>Author:</strong> {recipe.username}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;