import { Alert, Button, Form, Modal } from "react-bootstrap";
import AddTitle from "../add_recipe/AddTitle";
import AddIngredients from "../add_recipe/AddIngredients";
import AddMethod from "../add_recipe/AddMethod";
import AddServesAmount from "../add_recipe/AddServesAmount";
import AddTags from "../add_recipe/AddTags";
import Recipe from "../interfaces/Recipe";
import { useEffect, useState } from "react";
import Tag from "../interfaces/Tag";
import axios from "axios";

/** * Props for the EditRecipeModal component.
 *
 * @property {boolean} editModalOpen - Indicates if the modal is open.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setEditModalOpen - Function to toggle the state of the modal.
 * @property {Recipe} recipe - The recipe being edited.
 * @property {Tag[]} tags - The tags the recipe has.
 * @property {React.Dispatch<React.SetStateAction<Tag[]>>} setTags - Function to update the tags.
 */
interface Props {
  editModalOpen: boolean;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recipe: Recipe;
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

/**
 * modal to edit a recipe
 *
 * @param props - The props for the component.
 * @returns
 */
const EditRecileModal: React.FC<Props> = ({
  editModalOpen,
  setEditModalOpen,
  recipe,
  tags,
  setTags,
}) => {
  const [name, setName] = useState<string>(recipe.name);
  const [serves, setServes] = useState<number>(recipe.serves);
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >(recipe.ingredients);
  const [instructions, setInstructions] = useState<string>(recipe.instructions);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    setSelectedTags([...tags]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updateRecipe = {
      name: name !== recipe.name ? name : undefined,
      serves: serves !== recipe.serves ? serves : undefined,
      ingredients: ingredients !== recipe.ingredients ? ingredients : undefined,
      instructions:
        instructions !== recipe.instructions ? instructions : undefined,
      tags:
        selectedTags !== tags ? selectedTags.map((tag) => tag._id) : undefined,
    };
    console.log(updateRecipe);
    setEditModalOpen(false);
    recipe.name = name;
    recipe.serves = serves;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;
    setTags(selectedTags);

    try {
      await axios.patch(
        `http://localhost:4000/recipe/${recipe._id}`,
        updateRecipe
      );
    } catch (err) {
      setMessage("Couldn't Update");
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        show={editModalOpen}
        onHide={() => setEditModalOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <AddTitle name={name} setName={setName} />
            <AddIngredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <AddMethod
              instructions={instructions}
              setInstructions={setInstructions}
            />
            <AddServesAmount serves={serves} setServes={setServes} />
            <AddTags
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
            {message && <Alert>{message}</Alert>}
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setEditModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditRecileModal;
