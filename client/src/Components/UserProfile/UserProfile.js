import "./UserProfile.css";
import { useState, useEffect, useRef } from "react";
import { getCurrentUserProfile } from "../../services/SpotifyService";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  useEffect(() => {
    getCurrentUserProfile().then(setProfile).catch(console.error);
  }, []);

  if (!profile)
    return (
      <div className="Profile">
        <p className="Profile-name">Loading profile...</p>
      </div>
    );

  return (
    <div className="Profile" onClick={toggleDropdown}>
      <h3 className="Profile-name">{profile.name}</h3>
      {profile.image && (
        <img
          src={profile.image}
          alt="Profile"
          width={100}
          className="Profile-image"
        />
      )}
      {showDropdown && (
        <div className="Profile-dropdown">
          <p className="Profile-email">{profile.email}</p>
          <button
            className="Logout-button"
            onClick={() => alert("Logging out...")}
          >
            LOG OUT
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
