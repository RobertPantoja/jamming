import { fetchWithSpotifyToken } from "../utils/SpotifyApi";

export async function getCurrentUserProfile() {
  const response = await fetchWithSpotifyToken("https://api.spotify.com/v1/me");

  if (!response.ok) throw new Error("Failed to fetch user profile");

  const data = await response.json();

  return {
    name: data.display_name,
    image: data.images?.[0]?.url || null,
    email: data.email,
  };
}

export async function getUserPlaylists(limit = 25) {
  const response = await fetchWithSpotifyToken(
    `https://api.spotify.com/v1/me/playlists?limit=${limit}`
  );

  if (!response.ok) throw new Error("Failed to load playlists");

  const data = await response.json();

  return data.items.map((playlist) => ({
    id: playlist.id,
    name: playlist.name,
    image: playlist.images?.[0]?.url || null,
  }));
}

export async function getPlaylistTracks(playlistid) {
  const response = await fetchWithSpotifyToken(
    `https://api.spotify.com/v1/playlists/${playlistid}/tracks`
  );

  if (!response.ok) throw new Error("Failed to get playlist tracks");

  const data = await response.json();

  return data.items.map((track) => ({
    id: track.track.id,
    name: track.track.name,
    album: track.track.album.name,
    artist: track.track.artists.map((a) => a.name).join(" & "),
    image: track.track.album.images[0]?.url || null,
    href: track.track.href,
  }));
}
