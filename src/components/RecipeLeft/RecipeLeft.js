const RecipeLeft = (props) => {
    const {recipeId, author, title, text } = props.recipeInfo;
  return (
    <div className="recipe-left">
      <p className="recipe-number">{recipeId}</p>
      <p className="author">{author}</p>
      <h1 className="recipe-title">
        {title}
      </h1>
      <p className="recipe-snippet">
        {text}
      </p>
      <a className="recipe-read-more" href="/#">READ</a>
    </div>
  );
};
export default RecipeLeft;
