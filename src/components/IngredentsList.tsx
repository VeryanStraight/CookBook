interface Props {
  items: string[];
}

const IngredentsList = ({ items }: Props) => {
  return (
    <>
      <h1>Ingredents</h1>
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
