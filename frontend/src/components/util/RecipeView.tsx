import List from "./List";
import { useLocation } from "react-router-dom";
import Recipe from "./../interfaces/Recipe";
import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Tag from "./../interfaces/Tag";
import AddTags from "../add_recipe/AddTags";
import AddServesAmount from "../add_recipe/AddServesAmount";
import AddMethod from "../add_recipe/AddMethod";
import AddIngredients from "../add_recipe/AddIngredients";
import AddTitle from "../add_recipe/AddTitle";

interface Props {
  recipe?: Recipe;
}

const RecipeVeiw: React.FC<Props> = ({ recipe }) => {
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const location = useLocation();
  recipe = recipe || (location.state as Recipe);

  const [name, setName] = useState<string>(recipe.name);
  const [serves, setServes] = useState<number>(recipe.serves);
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >(recipe.ingredients);
  const [instructions, setInstructions] = useState<string>(recipe.instructions);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    getTags();
  }, []);

  const getTags = async () => {
    try {
      console.log({ tagIds: recipe.tags });
      const res = await axios.post(`http://localhost:4000/tags/retrieve`, {
        tagIds: recipe.tags,
      });
      console.log(res.data);
      setTags(res.data);
      setSelectedTags([...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updateRecipe = {
      name: name !== recipe.name ? name : undefined,
      serves: serves !== recipe.serves ? serves : undefined,
      ingredients: ingredients !== recipe.ingredients ? ingredients : undefined, //check
      instructions:
        instructions !== recipe.instructions ? instructions : undefined,
      tags:
        selectedTags !== tags ? selectedTags.map((tag) => tag._id) : undefined, //check
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
    <>
      <main className="container mt-md-4">
        <h1 className="text-center text-dark format-heading mb-4">
          {recipe.name}
        </h1>
        <Button onClick={() => setAboutModalOpen(true)}>About</Button>
        <Button onClick={() => setEditModalOpen(true)}>Edit</Button>
        <h1>Ingredients</h1>
        <List
          items={recipe.ingredients.map(
            (val) => `${val.amount} ${val.ingredient}`
          )}
        />
        <h1 className="mt-4">Method</h1>
        <p style={{ whiteSpace: "pre-line" }}>{recipe.instructions}</p>
      </main>
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

      <Modal
        show={aboutModalOpen}
        onHide={() => setAboutModalOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipe.serves > 0 && <p>Serves: {recipe.serves}</p>}
          {tags.length > 0 && (
            <>
              <p>Tags:</p>
              <List items={tags.map((tag) => tag.tag)} />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecipeVeiw;
