import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../api/recipesApi';

interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string; // Update fields to match your database schema
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes();
        setRecipes(data); // Assuming `data` is an array of recipes
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
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;