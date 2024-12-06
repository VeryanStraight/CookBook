import { Button } from "react-bootstrap";

interface Props {
  items: { id: string; value: string }[];
  removeItem: (index: number) => void;
}

const EditableList: React.FC<Props> = ({ items, removeItem }) => {
  return (
    <>
      <ul className={"list-group"}>
        {items.map((item, i) => (
          <li className="list-group-item" key={item.id + i}>
            {item.value}
            <Button variant="primary" onClick={() => removeItem(i)}></Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EditableList;
