import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div className="Playlist">
      <input defaultValue="My Playlist" value={playlistName} />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
