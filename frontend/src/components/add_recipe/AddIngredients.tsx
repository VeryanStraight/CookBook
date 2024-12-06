import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import EditableList from "../util/EditableList";

interface Props {
  setIngredients: React.Dispatch<
    React.SetStateAction<{ amount: string; ingredient: string }[]>
  >;
  ingredients: { amount: string; ingredient: string }[];
}

const AddIngredents: React.FC<Props> = ({ ingredients, setIngredients }) => {
  const [ingredientsText, setIngredientsText] = useState<string>("");

  //method to convert text to ingredents and add to the list
  const addIngredient = () => {
    if (ingredientsText === "") {
      return;
    }

    const ingredentsList: string[] = ingredientsText.trim().split("\n");

    ingredentsList.forEach((i: string) => {
      const [amount, ingredient] = i.split("|");

      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { amount, ingredient },
      ]);
    });
    console.log(ingredients);
  };

  const removeIngredient = (index: number) => {
    console.log(index);
    setIngredients((prevIngredents) =>
      prevIngredents.filter((_, i) => {
        return i !== index;
      })
    );
  };

  return (
    <>
      {" "}
      <Form.Group controlId="formIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Button variant="primary" type="button" onClick={addIngredient}>
          Submit Ingredents
        </Button>
        <Form.Control
          as="textarea"
          rows={3}
          value={ingredientsText}
          placeholder="Add Ingredients e.g:
200g|cheese
1 Cup|pasta"
          onChange={(e) => setIngredientsText(e.target.value)}
        />
        {ingredients.length > 0 && (
          <EditableList
            items={ingredients.map((item) => ({
              id: item.amount + item.ingredient,
              value: item.amount + " " + item.ingredient,
            }))}
            removeItem={removeIngredient}
          ></EditableList>
        )}
      </Form.Group>
    </>
  );
};

export default AddIngredents;
