import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "../Components/Searchbar/SearchBar";
import SearchResults from "../Components/SearchResults/SearchResults";
import Playlist from "../Components/Playlist/Playlist";
import UserProfile from "../Components/UserProfile/UserProfile";

import { redirectToSpotifyAuth } from "../utils/SpotifyAuth";
import {
  getUserPlaylists,
  getPlaylistTracks,
  updateSpotifyPlaylist,
  searchSpotifyItems,
} from "../services/SpotifyService";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUserPlaylists().then(setPlaylists).catch(console.error);
  }, []);

  function handleSelectPlaylist(id) {
    setPlaylistId(id);
    if (id === "") {
      setPlaylistTracks([]);
    } else {
      getPlaylistTracks(id).then(setPlaylistTracks).catch(console.error);
    }
  }

  function addTrack(track) {
    if (playlistTracks.find((t) => t.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((playlistTracks) => [...playlistTracks, track]);
    }
  }

  function removeTrack(track) {
    const filteredTracks = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(filteredTracks);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    if (playlistId) {
      updateSpotifyPlaylist(playlistId, trackURIs);
      alert("Playlist Updated Succesfully!");
    } else {
      alert("No playlist selected");
    }
  }

  function search(term) {
    if (term) {
      searchSpotifyItems(term).then(setSearchResults).catch(console.error);
    } else {
      alert("No term in Search Bar");
    }
  }

  if (!sessionStorage.getItem("access_token")) {
    return (
      <div className="Home">
        <div className="Header">
          <h1>
            Ja<span className="highlight">mm</span>ing
          </h1>
        </div>
        <div className="App">
          <div className="Login-section">
            <button className="LoginButton" onClick={redirectToSpotifyAuth}>
              LOGIN TO SPOTIFY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Home">
      <div className="Header">
        <h1>
          Ja<span className="highlight">mm</span>ing
        </h1>
        <UserProfile />
      </div>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlists={playlists}
            playlistId={playlistId}
            playlistTracks={playlistTracks}
            onSelectPlaylist={handleSelectPlaylist}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
