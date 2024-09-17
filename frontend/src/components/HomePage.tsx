import Search from "./Search";
import "./style.css";

const HomePage = () => {
  return (
    <main className="container mt-4">
      <div className="row justify-content-center">
        <header>
          <h1 className="text-center text-dark format-heading">Recipe Book</h1>
        </header>
        <Search />
      </div>
    </main>
  );
};

export default HomePage;
