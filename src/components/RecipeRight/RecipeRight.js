// const url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/copycat-hamburger-helper1-1659463591.jpg?crop=0.668xw:1.00xh;0.176xw,0&resize=640:*';

// const style = {
//     backDropFilter
// }

const RecipeRight = ({ url }) => {
  return (
    <section className="recipe-right">
      <section className="image-container">
        <img className="recipe-image" src={url} alt="recipe" />
      </section>
    </section>
  );
};

export default RecipeRight;
