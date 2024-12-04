import List from "./util/List";
import { useLocation } from "react-router-dom";
import Recipe from "./interfaces/Recipe";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Tag from "./interfaces/Tag";

interface Props {
  recipe?: Recipe;
}

const RecipeVeiw: React.FC<Props> = ({ recipe }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const location = useLocation();
  recipe = recipe || (location.state as Recipe);

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
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main className="container mt-md-4">
        <h1 className="text-center text-dark format-heading mb-4">
          {recipe.name}
        </h1>
        <Button onClick={() => setModalOpen(true)}>About</Button>
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
        show={modalOpen}
        onHide={closeModal}
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
