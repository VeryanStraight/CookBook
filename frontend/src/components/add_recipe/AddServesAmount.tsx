import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  serves: number;
  setServes: React.Dispatch<React.SetStateAction<number>>;
}

const AddServesAmount: React.FC<Props> = ({ serves, setServes }) => {
  const handleSetServes = (s: string) => {
    if (s === "" || /^[+-]?\d+$/.test(s)) {
      setServes(Number(s));
    }
  };

  return (
    <>
      <Form.Group controlId="formServes">
        <Form.Label>Number Serves</Form.Label>
        <Form.Control
          type="number"
          value={serves}
          onChange={(e) => handleSetServes(e.target.value)}
        />
      </Form.Group>
    </>
  );
};

export default AddServesAmount;
