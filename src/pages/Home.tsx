import Button from "../components/Button/Button";
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import your styles
import dish from "../assets/ai_img_home.jpg";

const Page: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToRecipes = () => {
    navigate('/recipes');
  };

  const handleNavigateToCreateRecipe = () => {
    navigate('/create');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">CookNest: Your Personal Recipe Companion</h1>
      <h2 className="page-subtitle">Plan, Create, and Share Recipes with Ease</h2>

      <div className="grid-container">
        <div className="grid-item image-container">
          <img
            src={dish}
            alt="A delicious dish"
            className="grid-image"
          />
        </div>
        <div className="grid-item text-container">
          <div className="description-textarea">
            <p >
              Welcome to CookNest, 
            </p>
            <p>
              the ultimate recipe companion for home chefs and food enthusiasts! Effortlessly create, organize, and share your favorite recipes. Plan your week with personalized collections like ‘Family Dinners’ or ‘Healthy Meals,’ and choose which recipes to keep private or share with the world. With CookNest, meal prep is a breeze, and exciting features like ingredient filtering and shopping list generation are on the way. Join CookNest today and turn your recipe dreams into delicious realities!
            </p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <Button
          label="Recipes"
          type="button"
          onClick={handleNavigateToRecipes}
        />
        <Button
          label="Create recipe"
          type="button"
          onClick={handleNavigateToCreateRecipe}
        />
      </div>
    </div>
  );
};

export default Page;