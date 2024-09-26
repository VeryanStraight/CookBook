import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import IngredentsList from "./IngredentsList";
import EditableIngredentList from "./EditableIngredentList";

const AddRecipe = () => {
  //setting up variables
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >([]);
  const [ingredientsText, setIngredientsText] = useState<string>("");
  const [serves, setServes] = useState<number>(-1);
  const [instructions, setInstructions] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  //method to convert text to ingredents and add to the list
  const addIngredient = () => {
    const ingredentsList: string[] = ingredientsText.split("\n");

    ingredentsList.forEach((i: string) => {
      const [amount, ingredient] = i.split("|");

      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { amount, ingredient },
      ]);
    });
  };

  const removeIngredient = (index: number) => {
    console.log(index);
    setIngredients((prevIngredents) =>
      prevIngredents.filter((_, i) => {
        return i !== index;
      })
    );
  };

  //will add the new recipe to the database (at the moment just debuging)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(name);
    console.log(ingredients);
    console.log(serves);
    console.log(instructions);
    console.log(tags);
  };

  //stops the form from submitting each time someone presses enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* title input */}
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

        {/* ingredents input and list */}
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
            <EditableIngredentList
              items={ingredients}
              removeIngredient={removeIngredient}
            ></EditableIngredentList>
          )}
        </Form.Group>

        {/* to do
        -make a form for ingrededts:
            add one by one or in a group (seprate by n/)
            how to tell what are the amounts and what are the ingredents (have some kind of seprator |?)
            show list of added - when you click on one make pop up askin if you want to delete
            make a reorder option? - not sure how i would do this
            have a reset ingredents button

        -make a form for method
            try if textArea does what I want
        -make a serves input
            is there some sort of number only input already of do I need to add my own checks
        -make dropdown for adding tags
            use method simmlar to ingredents for adding/removing 

        ------------------------
        |     title            |
        ------------------------

        ------------------------
        |      ingredents      |
        |      text area       |
        |                      |
        ------------------------
        ------------------------
        ------------------------
        ------------------------

        -------------  ----------
        | tags      |  | serves |
        -------------  ----------
        -------------
        -------------

        --------
        |submit|
        --------
        
        
        
        */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddRecipe;
