import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  addModalOpen: boolean;
  closeModal: () => void;
  fechTags: () => void;
}

const AddTag: React.FC<Props> = ({ addModalOpen, closeModal, fechTags }) => {
  const [newTag, setNewTag] = useState<string>();

  const saveTag = async () => {
    try {
      await axios.post(`http://localhost:4000/tag`, {
        tag: newTag,
      });
      fechTags();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={addModalOpen}
      onHide={closeModal}
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
  );
};

export default AddTag;
