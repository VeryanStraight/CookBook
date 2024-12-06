interface Props {
  items: string[];
}

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
