import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange }) {
  function handleNameChange(event) {
    onNameChange(event.target.value)
  }

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange}/>
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
