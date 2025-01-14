import List from "./List";
import { useLocation } from "react-router-dom";
import Recipe from "./../interfaces/Recipe";
import { useEffect, useState } from "react";
import axios from "axios";
import Tag from "./../interfaces/Tag";
import EditRecipeModal from "./EditRecipeModal";
import { Button, Modal } from "react-bootstrap";

/**
 * Props for the RecipeVeiw component.
 *
 * @property {Recipe} recipe - The recipe to display.
 */
interface Props {
  recipe?: Recipe;
}

/**
 * RecipeVeiw component displays a recipe.
 *
 * @param {Props} props - The props for the component.
 * @returns
 */
const RecipeVeiw: React.FC<Props> = ({ recipe }) => {
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const location = useLocation();
  recipe = recipe || (location.state as Recipe);

  useEffect(() => {
    const getTags = async () => {
      try {
        console.log({ tagIds: recipe.tags });
        const res = await axios.post(`http://localhost:4000/tags/retrieve`, {
          tagIds: recipe.tags,
        });
        console.log(res.data);
        setTags(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTags();
  }, []);

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
      <EditRecipeModal
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
        recipe={recipe}
        tags={tags}
        setTags={setTags}
      />

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
