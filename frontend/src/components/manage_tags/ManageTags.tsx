import axios from "axios";
import { useEffect, useState } from "react";
import Tag from "../interfaces/Tag";
import EditableList from "../util/EditableList";
import { Button } from "react-bootstrap";
import AddTag from "./AddTag";
import DeleteTag from "./DeleteTag";

const ManageTags = () => {
  // ToDo
  // copy code from search results for clickable list
  // copy code from editable list to make delete option
  // copy code from delete recipe for popup to add recipe
  const [tags, setTags] = useState<Tag[]>([]);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [tag, setTag] = useState<Tag>();

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
    setDeleteModalOpen(true);
    setTag(tags[index]);
  };

  const addTag = () => {
    setAddModalOpen(true);
  };

  const closeModal = () => {
    setAddModalOpen(false);
    setDeleteModalOpen(false);
  };

  return (
    <main className="container mt-md-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading mb-4">Tags</h1>
          <Button onClick={addTag}>Add Tag</Button>
          <EditableList
            items={tags.map((tag) => ({ id: tag._id, value: tag.tag }))}
            removeItem={removeTag}
          />
        </header>
        <AddTag
          addModalOpen={addModalOpen}
          closeModal={closeModal}
          fechTags={fechTags}
        />
        {tag && (
          <DeleteTag
            _id={tag._id}
            fechTags={fechTags}
            closeModal={closeModal}
            deleteModalOpen={deleteModalOpen}
          />
        )}
      </div>
    </main>
  );
};

export default ManageTags;
