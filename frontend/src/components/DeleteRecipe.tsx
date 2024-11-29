import { useState } from "react";
import Recipe from "./interfaces/Recipe";
import Search from "./Search";
import { Button, Modal } from "react-bootstrap";
import RecipeVeiw from "./RecipeView";
import RecipeView from "./RecipeView";
import axios from "axios";

const DeleteRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = (recipe: Recipe) => {
    setModalOpen(true);
    setRecipe(recipe);
  };

  const closeModal = () => {
    setModalOpen(false);
    setRecipe(undefined);
  };

  const deleteRecipe = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/recipe/${recipe?._id}`
      );
      closeModal();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //todo - add search but on click give delete option?
  const onClick = (recipe: Recipe) => {
    console.log("clicked on recipe");
    openModal(recipe);
    console.log(modalOpen);
  };
  return (
    <>
      <h1>Delete Recipe</h1>
      <Search onClick={onClick}></Search>
      <Modal
        show={modalOpen}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Recipe?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipe && (
            <div>
              <RecipeView recipe={recipe}></RecipeView>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteRecipe}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteRecipe;
