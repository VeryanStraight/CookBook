import { useNavigate } from "react-router-dom";
import Recipe from "./interfaces/Recipe";
import Search from "./search/Search";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onClick = (recipe: Recipe) => {
    navigate("CookBook/recipe", { state: recipe });
  };

  return (
    <main className="container mt-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading">Recipe Book</h1>
        </header>
        <Search onClick={onClick} />
      </div>
    </main>
  );
};

export default HomePage;
