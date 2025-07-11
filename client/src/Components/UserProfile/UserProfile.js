import "./UserProfile.css";
import { useState, useEffect } from "react";
import { getCurrentUserProfile } from "../../services/SpotifyService";

function UserProfile() {
  const [profile, setProfile] = useState(null);
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
    <div className="Profile">
      <h3 className="Profile-name">{profile.name}</h3>
      {profile.image && (
        <img src={profile.image} alt="Profile" width={100} className="Profile-image" />
      )}
    </div>
  );
}

export default UserProfile;
