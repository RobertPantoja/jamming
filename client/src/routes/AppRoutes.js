import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotifyCallback from "../Pages/SpotifyCallback";
import App from "../Pages/App";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/callback" element={<SpotifyCallback />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
