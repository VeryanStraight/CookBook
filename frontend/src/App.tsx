import AddRecipe from "./components/add_recipe/AddRecipe";
import DeleteRecipe from "./components/DeleteRecipe";
import HomePage from "./components/HomePage";
import ManageTags from "./components/manage_tags/ManageTags";
import NavBarBig from "./components/util/NavBarBig";
import NavBarSmall from "./components/util/NavBarSmall";
import RecipeVeiw from "./components/util/RecipeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row top-div">
        <div className="col-2 border-end d-none d-md-block background-cover" />
        <NavBarSmall />
        <NavBarBig />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="CookBook/" element={<HomePage />} />
            <Route path="CookBook/recipe" element={<RecipeVeiw />} />
            <Route path="CookBook/addRecipe" element={<AddRecipe />} />
            <Route path="CookBook/deleteRecipe" element={<DeleteRecipe />} />
            <Route path="CookBook/manageTags" element={<ManageTags />} />
          </Routes>
        </div>
        <div className="col-2 border-start d-none d-md-block background-cover" />
      </div>
    </Router>
  );
}

export default App;
