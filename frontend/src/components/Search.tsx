import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchData = async (search: string) => {
    try {
      const encodedSearch = encodeURIComponent(search.trim());
      // console.log(encodedSearch);

      const res = await axios.get(
        `http://localhost:4000/recipe/search/${encodedSearch}`
      );
      setSearchData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(search);
    console.log(searchData);
  };

  return (
    <div>
      <form className="d-flex mt-4" onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
