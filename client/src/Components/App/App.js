import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "../Searchbar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import mockSearchResults from "../../mocks/mockSearchResults";
import mockPlaylistTracks from "../../mocks/mockPlaylistTracks";

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist Name");
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [playlistTracks, setPlatlistTracks] = useState(mockPlaylistTracks);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
