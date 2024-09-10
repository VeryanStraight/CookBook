import HomePage from "./components/HomePage";
import NavBarBig from "./components/NavBarBig";
import NavBarSmall from "./components/NavBarSmall";
import RecipeVeiw from "./components/RecipeVeiw";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const title = "title";
  // const ingredients = ["bgf rg", "rvrv", "rergr", "revtrh", "rvevrgg"];
  // const method =
  //   "dsrblhnakc ;ljbn;cam po;rblgfbvn kjfb;nk; kmth lbglksmge ;nghfhtnnfpgohrcgihiurh nd kh fihrghg l;dfl \n kncag akeJE REAGFJH kdf hgsdlfvldjfhvfkghmk hsdflmvj hfkjhfdmkg kdjhlsdhkkkkkvn";
  // const catgory = "cake";
  // const catgorys = ["cake", "pudding", "dinner", "snack", "lunch"];

  return (
    <Router>
      <div className="d-flex flex-column flex-md-row">
        <NavBarSmall />
        <NavBarBig />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe" element={<RecipeVeiw />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
