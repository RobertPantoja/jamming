import "./Track.css";

function Track() {
  function renderAction(isRemoval) {
    // Logic to render + or - button based on track's presence in the playlist
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{/* <!-- track name --> */}</h3>
        <p>{/* <!-- track artist --> | <!-- track album --> */}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
