import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from "./components/DeleteRecipe";
import HomePage from "./components/HomePage";
import ManageTags from "./components/ManageTags";
import NavBarBig from "./components/util/NavBarBig";
import NavBarSmall from "./components/util/NavBarSmall";
import RecipeVeiw from "./components/util/RecipeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row top-div">
        <NavBarSmall />
        <NavBarBig />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe" element={<RecipeVeiw />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/deleteRecipe" element={<DeleteRecipe />} />
            <Route path="/manageTags" element={<ManageTags />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
