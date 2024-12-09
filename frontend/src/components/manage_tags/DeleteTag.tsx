import axios from "axios";
import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  _id: string;
  fechTags: () => void;
  closeModal: () => void;
  deleteModalOpen: boolean;
}

const DeleteTag: React.FC<Props> = ({
  _id,
  fechTags,
  closeModal,
  deleteModalOpen,
}) => {
  const deleteTag = async () => {
    try {
      await axios.delete(`http://localhost:4000/tag/${_id}`);
      fechTags();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={deleteModalOpen}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Tag</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={deleteTag}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTag;
