import { useState, useEffect } from "react";
import { getUserPlaylist } from "../../services/SpotifyService";

function UserPlaylists() {
  const [playlist, setPlaylist] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    getUserPlaylist().then(setPlaylist).catch(console.error);
  }, []);

  const handleChange = (event) => {
    const id = event.target.value;
    selectedId(id);
  };

  return (
    <div>
      <label htmlFor="playlist">Select Playlist:</label>
      <select id="playlist" value={selectedId} onChange={handleChange}>
        <option value="" disabled>
          Select one
        </option>
        {playlist.map((pl) => (
          <option key={pl.id} value={pl.id}>
            {pl.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserPlaylists;
