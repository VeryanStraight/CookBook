import axios from "axios";
import { useEffect, useState } from "react";
import Tag from "./interfaces/Tag";
import EditableList from "./EditableList";
import { Button, Form, Modal } from "react-bootstrap";

const ManageTags = () => {
  // ToDo
  // copy code from search results for clickable list
  // copy code from editable list to make delete option
  // copy code from delete recipe for popup to add recipe
  const [tags, setTags] = useState<Tag[]>([]);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>();

  useEffect(() => {
    fechTags();
  }, []);

  const fechTags = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/tags`);
      setTags(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTag = (index: number) => {
    //ToDo
    //open confermation modal
    //delete tag
  };

  const onClickAdd = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const saveTag = async () => {
    try {
      const res = await axios.post(`http://localhost:4000/tag`, {
        tag: newTag,
      });
      fechTags();
      setAddModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="container mt-md-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading mb-4">Tags</h1>
          <Button onClick={onClickAdd}>Add Tag</Button>
          <EditableList
            items={tags.map((tag) => ({ id: tag._id, value: tag.tag }))}
            removeItem={removeTag}
          />
        </header>
        <Modal
          show={addModalOpen}
          onHide={closeAddModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Tag</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="addForm">
                <Form.Label>Tag</Form.Label>
                <Form.Control
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveTag}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </main>
  );
};

export default ManageTags;
