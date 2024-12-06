import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const AddMethod: React.FC<Props> = ({ instructions, setInstructions }) => {
  return (
    <>
      <Form.Group controlId="formMethod">
        <Form.Label>Method</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={instructions}
          placeholder="Add Method"
          onChange={(e) => setInstructions(e.target.value)}
        />
      </Form.Group>
    </>
  );
};

export default AddMethod;
