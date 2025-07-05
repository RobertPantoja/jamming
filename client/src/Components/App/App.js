import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "../Searchbar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import mockSearchResults from "../../mocks/mockSearchResults";

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  return (
    <div>
      <h1>
        Ja<span className="highlight">mm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
