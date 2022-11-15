import './App.css';
import { useState, useEffect} from 'react';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import RecipeLeft from './components/RecipeLeft/RecipeLeft';
import RecipeRight from './components/RecipeRight/RecipeRight';
const url = "https://636533ed046eddf1bae83cdf.mockapi.io/api/recipes/recipes";

const api = 'https://636533ed046eddf1bae83cdf.mockapi.io/api/recipes/:endpoint';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);

      const result = await data.json();

      setRecipes(result);
    }

    fetchData();
  }, [recipes]);

  const recipeComponents = recipes.map( r => (
    <RecipeContainer
      recipe={r}
    />
  ));

  return (
    <div className="App">
      {recipeComponents}
    </div>
  );
}

export default App;
