import { useState } from "react";
import Recipe from "./interfaces/Recipe";
import Search from "./Search";

const DeleteRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = (recipe: Recipe) => {
    setModalOpen(true);
    setRecipe(recipe);
  };

  const closeModal = (recipe: Recipe) => {
    setModalOpen(false);
    setRecipe(undefined);
  };

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
