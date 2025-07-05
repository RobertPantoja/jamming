import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className="Playlist">
      <input defaultValue="My Playlist" value={playlistName} />
      <TrackList tracks={playlistTracks}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
