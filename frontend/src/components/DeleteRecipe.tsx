import Recipe from "./interfaces/Recipe";
import Search from "./Search";

const DeleteRecipe = () => {
  //todo - add search but on click give delete option?
  const onClick = (recipe: Recipe) => {};
  return (
    <>
      <h1>Delete Recipe</h1>
      <Search onClick={onClick}></Search>
    </>
  );
};

export default DeleteRecipe;
