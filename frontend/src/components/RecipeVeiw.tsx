import IngredentsList from "./IngredentsList";
import { useLocation } from "react-router-dom";
import { SearchItem } from "./Search";

const RecipeVeiw = () => {
  const location = useLocation();
  const item: SearchItem = location.state;

  return (
    <main className="container mt-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading">{item.name}</h1>
          <IngredentsList
            items={item.ingredients.map((val) => {
              return `${val.amount} ${val.ingredient}`;
            })}
          />
          <p style={{ whiteSpace: "pre-line" }}>{item.instructions}</p>
        </header>
      </div>
    </main>
  );
};

export default RecipeVeiw;
