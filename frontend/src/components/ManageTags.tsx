import axios from "axios";
import React, { useEffect, useState } from "react";
import Tag from "./interfaces/Tag";
import EditableList from "./EditableList";
import { Button } from "react-bootstrap";

const ManageTags = () => {
  // ToDo
  // on page load get all tags
  // copy code from search results for clickable list
  // copy code from editable list to make delete option
  // copy code from delete recipe for popup to add recipe
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    fechTags();
  }, []);

  const fechTags = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/tags`);
      setTags(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTag = (index: number) => {
    //ToDo
    //open confermation modal
    //delete tag
  };

  return (
    <main className="container mt-md-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading mb-4">Tags</h1>
          <Button>Add Tag</Button>
          <EditableList
            items={tags.map((tag) => ({ id: tag._id, value: tag.tag }))}
            removeItem={removeTag}
          />
        </header>
      </div>
    </main>
  );
};

export default ManageTags;
