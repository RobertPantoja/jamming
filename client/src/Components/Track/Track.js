import "./Track.css";

function Track({ track, isRemoval, onAdd, onRemove }) {
  function renderAction() {
    if (isRemoval) {
      return <button className="Track-action" onClick={removeTrack}>-</button>;
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

  function removeTrack() {
    onRemove(track)
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
