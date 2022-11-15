import RecipeLeft from "../RecipeLeft/RecipeLeft";
import RecipeRight from "../RecipeRight/RecipeRight";

const RecipeContainer = ({ recipe, ...props }) => {
  return (
    <div className="recipe-container">
      <RecipeLeft recipeInfo={recipe}/>
      <RecipeRight url={recipe.food}/>
    </div>
  );
};

export default RecipeContainer;
