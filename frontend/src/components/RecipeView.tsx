import IngredentsList from "./IngredentsList";
import { useLocation } from "react-router-dom";
import Recipe from "./interfaces/Recipe";

interface Props {
  recipe?: Recipe;
}

const RecipeVeiw: React.FC<Props> = ({ recipe }) => {
  const location = useLocation();
  recipe = recipe || (location.state as Recipe);

  return (
    <main className="container mt-md-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading mb-4">
            {recipe.name}
          </h1>
          <IngredentsList
            items={recipe.ingredients.map((val) => {
              return `${val.amount} ${val.ingredient}`;
            })}
          />
          <h1 className="mt-4">Method</h1>
          <p style={{ whiteSpace: "pre-line" }}>{recipe.instructions}</p>
        </header>
      </div>
    </main>
  );
};

export default RecipeVeiw;
