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
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylistTracks);

  function addTrack(track) {
    if (playlistTracks.find(savedTack => savedTack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((playlistTracks) => [...playlistTracks, track]);
    }
  }

  function removeTrack(track) {
    const filteredTracks = playlistTracks.filter(t => t.id !== track.id)
    setPlaylistTracks(filteredTracks)
  }

  function updatePlaylistName (name) {
    setPlaylistName(name)
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
