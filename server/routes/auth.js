require("dotenv").config();
const express = require("express");
const router = express.Router();

router.post("/api/token", async (req, res) => {
  const { code, codeVerifier } = req.body;

  if (!code || !codeVerifier) {
    return res.status(400).json({ error: "Missing code or code_verifier" });
  }

  const params = new URLSearchParams();
  params.append("client_id", process.env.SPOTIFY_CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", process.env.REDIRECT_URI);
  params.append("code_verifier", codeVerifier);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const data = await response.json();

    if (response.ok) {
      res.json({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
      });
    } else {
      res.status(400).json({ error: data });
    }
  } catch (error) {
    console.error("Token exchange error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
