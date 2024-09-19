import { useState } from "react";

const [search, setSearch] = useState("");

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
};

const Search = () => {
  return (
    <div>
      <form className="d-flex mt-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={handleSearch}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
