import Recipe from "./interfaces/Recipe";

interface Props {
  items: Recipe[];
  onClick: (recipe: Recipe) => void;
}

export const SearchResults = ({ items, onClick }: Props) => {
  return (
    <ul className="list-group mt-3">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item._id}
          onClick={() => onClick(item)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
