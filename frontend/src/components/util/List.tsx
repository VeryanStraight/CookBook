/**
 * Props for the List component.
 * @property {Array<string>} items - The list of items to display.
 */
interface Props {
  items: string[];
}

/**
 * EditableList component displays a list of items.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} - The rendered list.
 */
const IngredentsList: React.FC<Props> = ({ items }) => {
  return (
    <>
      <ul className={"list-group"}>
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredentsList;
