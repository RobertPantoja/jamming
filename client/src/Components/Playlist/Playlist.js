import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({
  playlists = [],
  playlistId,
  playlistTracks,
  onSelectPlaylist,
  onNameChange,
  onRemove,
  onSave,
}) {
  function handleSelectChange(event) {
    const selectedId = event.target.value;
    onSelectPlaylist(selectedId);
  }

  return (
    <div className="Playlist">
      <select
        value={playlistId}
        onChange={handleSelectChange}
        className="Playlist-select"
      >
        <option value="" disabled hidden>
          Select a Playlist
        </option>
        {playlists.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
