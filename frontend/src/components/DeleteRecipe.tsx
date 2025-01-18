import { useRef, useState } from "react";
import Recipe from "./interfaces/Recipe";
import Search, { SearchHandles } from "./search/Search";
import { Button, Modal } from "react-bootstrap";
import RecipeView from "./util/RecipeView";
import axios from "axios";

/**
 * DeleteRecipe components alows searching recipes and deleting them.
 *
 * @returns {JSX.Element} - The rendered delete page.
 */
const DeleteRecipe = () => {
  const searchRef = useRef<SearchHandles>(null);
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
      if (!recipe?._id) {
        console.error("Recipe ID is undefined");
        return;
      }

      const res = await axios.delete(
        `http://localhost:4000/recipe/${recipe?._id}`
      );
      closeModal();
      if (searchRef.current) {
        searchRef.current.triggerSearch();
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClick = (recipe: Recipe) => {
    console.log("clicked on recipe");
    openModal(recipe);
    console.log(modalOpen);
  };

  return (
    <>
      <h1 className="text-center text-dark format-heading mb-4">
        Delete Recipe
      </h1>
      <Search ref={searchRef} onClick={onClick} />
      <Modal
        show={modalOpen}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipe && (
            <div>
              <RecipeView recipe={recipe} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteRecipe}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteRecipe;
