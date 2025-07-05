import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mm</span>ing
      </h1>
      <div className="App">
        {/* <!-- SearchBar component --> */}
        <div className="App-playlist">
          {/* <!-- SearchResults component --> */}
          {/* <!-- Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
