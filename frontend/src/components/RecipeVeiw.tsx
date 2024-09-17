import IngredentsList from "./IngredentsList";

interface Props {
  title?: string;
  ingredients?: string[];
  method?: string;
}

const RecipeVeiw = ({
  title = "not found",
  ingredients = [],
  method = "",
}: Props) => {
  return (
    <main className="container mt-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading">{title}</h1>
          <IngredentsList items={ingredients} />
          <p style={{ whiteSpace: "pre-line" }}>{method}</p>
        </header>
      </div>
    </main>
  );
};

export default RecipeVeiw;
