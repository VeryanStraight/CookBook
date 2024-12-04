import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import EditableList from "../util/EditableList";
import Tag from "../interfaces/Tag";
import Recipe from "../interfaces/Recipe";
import { Alert } from "react-bootstrap";
import AddTitle from "./AddTitle";

const AddRecipe = () => {
  //setting up variables
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >([]);
  const [ingredientsText, setIngredientsText] = useState<string>("");
  const [serves, setServes] = useState<number>(-1);
  const [instructions, setInstructions] = useState<string>("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedtags] = useState<Tag[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/tags`);
      setTags(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const removeTag = (index: number) => {
    console.log(index);
    setSelectedtags((prev) =>
      prev.filter((_, i) => {
        return i !== index;
      })
    );
  };

  const handleSetTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const tag: string = selectedOption.text;
    const _id: string = selectedOption.value;
    setSelectedtags((prev) => [...prev, { _id: _id, tag: tag }]);
  };

  const handleSetServes = (s: string) => {
    if (s === "" || /^[+-]?\d+$/.test(s)) {
      setServes(Number(s));
    }
  };

  //will add the new recipe to the database
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const recipe: Recipe = {
      _id: undefined,
      name: name,
      serves: serves,
      ingredients: ingredients,
      instructions: instructions,
      tags: selectedTags.map((tag) => tag._id),
    };
    console.log(recipe);

    try {
      await axios.post(`http://localhost:4000/recipe`, recipe);

      setMessage("added recipe");
    } catch (err) {
      setMessage("couldn't add recipe: " + err);
      console.log(err);
    }
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
        <AddTitle name={name} setName={setName} handleKeyDown={handleKeyDown} />

        {/* ingredients input and list */}
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

        {/* method input */}
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

        {/* serves input */}
        <Form.Group controlId="formServes">
          <Form.Label>Number Serves</Form.Label>
          <Form.Control
            type="number"
            value={serves}
            onChange={(e) => handleSetServes(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTags">
          <Form.Label>Tags</Form.Label>
          <Form.Select
            onChange={(e) => {
              handleSetTag(e);
              console.log(e.target.value);
            }}
          >
            {/*ToDo: make a balnk default that cant be added, make it a set, selectedTags needs to rember id */}
            {tags?.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.tag}
              </option>
            ))}
          </Form.Select>
          {selectedTags.length > 0 && (
            <EditableList
              items={selectedTags.map((tag) => ({
                id: tag._id,
                value: tag.tag,
              }))}
              removeItem={removeTag}
            ></EditableList>
          )}
        </Form.Group>
        {message && <Alert>{message}</Alert>}

        {/* to do
            -need to make selectedTags a set and include id
            -make ingredents list use editable list and remove ingredents editable list
            -fix error with tags list
            -make it save to database

        improvements:
        -ingrededts:
            make a reorder option? - not sure how i would do this
            have a reset ingredents button?

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

        ------------------------
        |        method        |
        |      text area       |
        |                      |
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
