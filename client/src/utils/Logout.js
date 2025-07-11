async function SpotifyLogout() {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("code_verifier");

  try {
    await fetch("api/logout", {
      method: "POST",
    });
  } catch (error) {
    console.error("Log Out Error:", error);
  }
  window.location.href = "/";
}

export default SpotifyLogout;
