import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditableIngredentList from "./EditableIngredentList";
import axios from "axios";
import EditableList from "./EditableList";

interface tags {
  _id: string;
  tag: string;
}

const AddRecipe = () => {
  //setting up variables
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >([]);
  const [ingredientsText, setIngredientsText] = useState<string>("");
  const [serves, setServes] = useState<number>(-1);
  const [instructions, setInstructions] = useState<string>("");
  const [tags, setTags] = useState<tags[]>([]);
  const [selectedTags, setSelectedtags] = useState<string[]>([]);

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

  const handleSetTag = (s: string) => {
    if (s === "") {
      return;
    }
    setSelectedtags((prev) => [...prev, s]);
  };

  const handleSetServes = (s: string) => {
    if (s === "" || /^[+-]?\d+$/.test(s)) {
      setServes(Number(s));
    }
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
            <EditableIngredentList
              items={ingredients}
              removeIngredient={removeIngredient}
            ></EditableIngredentList>
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
              handleSetTag(e.target.value);
              console.log(e.target.value);
            }}
          >
            {/*ToDo: make a balnk default that cant be added, make it a set, selectedTags needs to rember id */}
            {tags?.map((tag) => (
              <option value={tag.tag}>{tag.tag}</option>
            ))}
          </Form.Select>
          {selectedTags.length > 0 && (
            <EditableList
              items={selectedTags.map((tag) => ({ id: tag, value: tag }))}
              removeItem={removeTag}
            ></EditableList>
          )}
        </Form.Group>

        {/* to do
        -make a form for ingrededts:
            make a reorder option? - not sure how i would do this
            have a reset ingredents button?

        -make a form for method
            try if textArea does what I want
        -make a serves input
            is there some sort of number only input already of do I need to add my own checks
        -make dropdown for adding tags
            use method simmlar to ingredents for adding/removing
            need to make backend get tags to fill in the drop down
            find out what the mathod was that ran first 

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
