import './App.css';
import { useState, useEffect} from 'react';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
const url = "https://636533ed046eddf1bae83cdf.mockapi.io/api/recipes/recipes";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);

      const result = await data.json();

      setRecipes(result);
    }

    fetchData();
  }, []);

  const recipeComponents = recipes.map( r => (
    <RecipeContainer
      key={r.id}
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
