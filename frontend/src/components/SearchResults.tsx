import { SearchItem } from "./Search";

interface Props {
  items: SearchItem[];
}

export const SearchResults = ({ items }: Props) => {
  return (
    <ul className="list-group mt-3">
      {items.map((item) => (
        <li className="list-group-item" key={item.id_}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
