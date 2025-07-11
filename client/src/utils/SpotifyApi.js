export async function fetchWithSpotifyToken(url, options = {}) {
  let token = sessionStorage.getItem("access_token");

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if ((response.status === 401)) {
    const refreshResponse = await fetch("api/refresh", {
      method: "POST",
    });

    const refreshData = await refreshResponse.json();

    if (refreshData.access_token) {
      sessionStorage.setItem("access_token", refreshData.access_token);

      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${refreshData.access_token}`,
        },
      });
    } else {
      throw new Error("Could not refresh the token");
    }
  }

  return response;
}
