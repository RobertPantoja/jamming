import { fetchWithSpotifyToken } from "../utils/SpotifyApi";

export async function getCurrentUserProfile() {
  const response = await fetchWithSpotifyToken("https://api.spotify.com/v1/me");

  if (!response.ok)
    throw new Error(
      "Failed to fetch user profile" + (await response.json().error.message)
    );

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

  if (!response.ok)
    throw new Error(
      "Failed to load playlists" + (await response.json().error.message)
    );

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

  if (!response.ok)
    throw new Error(
      "Failed to get playlist tracks" + (await response.json().error.message)
    );

  const data = await response.json();

  return data.items.map((track) => ({
    id: track.track.id,
    name: track.track.name,
    album: track.track.album.name,
    artist: track.track.artists.map((a) => a.name).join(", "),
    image: track.track.album.images[0]?.url || null,
    uri: track.track.uri,
  }));
}

export async function updateSpotifyPlaylist(playlistId, trackURIs) {
  const response = await fetchWithSpotifyToken(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uris: trackURIs }),
    }
  );

  if (!response.ok)
    throw new Error(
      "Failed to update playlist" + (await response.json().error.message)
    );
}

export async function searchSpotifyItems(term, limit = 10) {
  const response = await fetchWithSpotifyToken(
    `https://api.spotify.com/v1/search?q=${term}&type=track&limit=${limit}`
  );

  if (!response.ok)
    throw new Error(
      "Failed to search for term" + (await response.json().error.message)
    );

  const data = await response.json();

  console.log(data.tracks);

  return data.tracks.items.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    album: track.album.name,
    uri: track.uri,
  }));
}
