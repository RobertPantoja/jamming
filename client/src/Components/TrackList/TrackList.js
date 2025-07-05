import "./TrackList.css";
import Track from "../Track/Track";

function TrackList({ tracks = [] }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          key={track.id} // Assuming each track has a unique id
          track={track}
          isRemoval={false} // Assuming this is a search result, not a playlist
        />
      ))}
    </div>
  );
}

export default TrackList;
