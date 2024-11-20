import React, { useState, useEffect } from 'react';
import { fetchRecipes, Recipe } from '../api/recipesApi';
import './Recipes.css';

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
      <h1 className="page-title">Recipes</h1>
      <div className="recipes-grid" role="list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card" role="listitem" aria-label={`Recipe: ${recipe.title}`}>
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-author">
              <strong>By:</strong> {recipe.username}
            </p>
            <div className="recipe-ingredients">
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.split(',').map((ingredient, idx) => (
                  <li key={idx}>{ingredient.trim()}</li>
                ))}
              </ul>
            </div>
            <p className="recipe-instructions">
              <strong>Instructions:</strong> {recipe.description}
            </p>
            <p className="recipe-cooking-time">
              <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;