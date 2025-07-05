import "./Track.css";

function Track({ track, isRemoval, onAdd }) {
  function renderAction() {
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  }

  function addTrack() {
    onAdd(track)
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
