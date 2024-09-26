import { SearchItem } from "./Search";
import { Link } from "react-router-dom";

interface Props {
  items: SearchItem[];
}

export const SearchResults = ({ items }: Props) => {
  return (
    <ul className="list-group mt-3">
      {items.map((item) => (
        <li className="list-group-item" key={item._id}>
          <Link to="/recipe" state={item}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
