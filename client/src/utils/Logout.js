async function SpotifyLogout() {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("code_verifier");

  const response = await fetch("api/logout", {
    method: "POST",
  });
  window.location.href = "/";
}

export default SpotifyLogout;
