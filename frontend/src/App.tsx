import AddRecipe from "./components/add_recipe/AddRecipe";
import DeleteRecipe from "./components/DeleteRecipe";
import HomePage from "./components/HomePage";
import ManageTags from "./components/manage_tags/ManageTags";
import NavBar from "./components/util/NavBar";
import RecipeView from "./components/util/RecipeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="d-flex flex-grow-1">
          <div className="d-none d-md-block col-md-2 background-cover" />
          <div className="flex-grow-1 p-5">
            <Routes>
              <Route path="CookBook/" element={<HomePage />} />
              <Route path="CookBook/recipe" element={<RecipeView />} />
              <Route path="CookBook/addRecipe" element={<AddRecipe />} />
              <Route path="CookBook/deleteRecipe" element={<DeleteRecipe />} />
              <Route path="CookBook/manageTags" element={<ManageTags />} />
            </Routes>
          </div>
          <div className="d-none d-md-block col-md-2 background-cover" />
        </div>
      </div>
    </Router>
  );
}

export default App;
