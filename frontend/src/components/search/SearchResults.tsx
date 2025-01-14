import Recipe from "../interfaces/Recipe";

/**
 * Props for the SearchResults component.
 *
 * @property {Recipe} recipe - The recipe to display.
 * @property {function(Recipe):void} onClick - what to do if one of the recipes is clicked on
 */
interface Props {
  items: Recipe[];
  onClick: (recipe: Recipe) => void;
}

/**
 * displays the results of a search in the form of a list
 *
 * @param props - the props of the component
 * @returns the list of search results
 */
export const SearchResults: React.FC<Props> = ({ items, onClick }) => {
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
