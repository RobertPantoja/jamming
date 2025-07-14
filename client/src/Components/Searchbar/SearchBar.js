import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function search() {
    onSearch(term);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
