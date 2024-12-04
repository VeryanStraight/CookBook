import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const AddTitle: React.FC<Props> = ({ name, setName, handleKeyDown }) => {
  return (
    <Form.Group controlId="formTitle">
      <Form.Label>Recipe Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Form.Group>
  );
};

export default AddTitle;
