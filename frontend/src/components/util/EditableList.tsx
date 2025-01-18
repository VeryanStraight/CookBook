import { CloseButton, ListGroup } from "react-bootstrap";

/**
 * Props for the EditableList component.
 *
 * @property {Array<{ id: string; value: string }>} items - The list of items to display.
 * @property {function(number):void} removeItem - Callback function to remove an item from the list.
 */
interface Props {
  items: { id: string; value: string }[];
  removeItem: (index: number) => void;
}

/**
 * EditableList component displays a list of items.
 * Items can be removed from the list by clicking on the buton displayed next to the item.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} - The rendered list of items.
 */
const EditableList: React.FC<Props> = ({ items, removeItem }) => {
  return (
    <>
      <ListGroup>
        {items.map((item, i) => (
          <ListGroup.Item
            className="d-flex justify-content-between align-items-center"
            key={item.id + i}
          >
            {item.value}
            <CloseButton onClick={() => removeItem(i)} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default EditableList;
