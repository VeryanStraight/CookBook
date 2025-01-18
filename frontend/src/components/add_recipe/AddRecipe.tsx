import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Tag from "../interfaces/Tag";
import Recipe from "../interfaces/Recipe";
import { Alert } from "react-bootstrap";
import AddTitle from "./AddTitle";
import AddIngredients from "./AddIngredients";
import AddMethod from "./AddMethod";
import AddTags from "./AddTags";
import AddServesAmount from "./AddServesAmount";

const AddRecipe = () => {
  //setting up variables
  const [name, setName] = useState<string>("");
  const [serves, setServes] = useState<number>(-1);
  const [ingredients, setIngredients] = useState<
    { amount: string; ingredient: string }[]
  >([]);
  const [instructions, setInstructions] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const [message, setMessage] = useState<string>();

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

  return (
    <>
      <h1 className="text-center text-dark format-heading mb-4">Add Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <AddTitle name={name} setName={setName} />

        <AddIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <AddMethod
          instructions={instructions}
          setInstructions={setInstructions}
        />

        <AddServesAmount serves={serves} setServes={setServes} />

        <AddTags
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
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
        */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddRecipe;
