import { useState, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Recipe from "../interfaces/Recipe";

interface Props {
  onClick: (recipe: Recipe) => void;
}

export interface SearchHandles {
  triggerSearch: () => void;
}

const Search = forwardRef<SearchHandles, Props>(({ onClick }, ref) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<Recipe[]>([]);

  const fetchData = async (search: string) => {
    try {
      const encodedSearch = encodeURIComponent(search.trim());
      const res = await axios.get(
        `http://localhost:4000/recipe/search/${encodedSearch}`
      );
      setSearchData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const triggerSearch = () => {
    if (search !== "") {
      fetchData(search);
    } else {
      setSearchData([]);
    }
    console.log(searchData);
  };

  useImperativeHandle(ref, () => ({
    triggerSearch,
  }));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (search !== "") {
      fetchData(search);
    } else {
      setSearchData([]);
    }
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
      {searchData.length > 0 && (
        <SearchResults items={searchData} onClick={onClick} />
      )}
    </div>
  );
});

export default Search;
