import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Tag from "../interfaces/Tag";
import EditableList from "../util/EditableList";
import axios from "axios";

interface Props {
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  selectedTags: Tag[];
}

const AddServesAmount: React.FC<Props> = ({
  setSelectedTags,
  selectedTags,
}) => {
  const [tags, setTags] = useState<Tag[]>([]);

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

  const removeTag = (index: number) => {
    console.log(index);
    setSelectedTags((prev) =>
      prev.filter((_, i) => {
        return i !== index;
      })
    );
  };

  const handleSetTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.selectedOptions[0];
    const tag: string = selectedOption.text;
    const _id: string = selectedOption.value;
    setSelectedTags((prev) => [...prev, { _id: _id, tag: tag }]);
  };

  return (
    <>
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
    </>
  );
};

export default AddServesAmount;
