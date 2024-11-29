import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from "./components/deleteRecipe";
import HomePage from "./components/HomePage";
import NavBarBig from "./components/NavBarBig";
import NavBarSmall from "./components/NavBarSmall";
import RecipeVeiw from "./components/RecipeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //tmp notes
  //rafce for creating new component
  //ctrl d for multi cursor

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
