import { Button } from "react-bootstrap";

interface Props {
  items: { amount: string; ingredient: string }[];
  removeIngredient: (index: number) => void;
}

const EditableIngredentList = ({ items, removeIngredient }: Props) => {
  return (
    <>
      <ul className={"list-group"}>
        {items.map((item, i) => (
          <li
            className="list-group-item"
            key={item.amount + item.ingredient + i}
          >
            {item.amount + " " + item.ingredient}
            <Button
              variant="primary"
              onClick={() => removeIngredient(i)}
            ></Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EditableIngredentList;
