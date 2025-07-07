import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SpotifyCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const codeVerifier = sessionStorage.getItem("code_verifier");

    if (!code || !codeVerifier) {
      console.error("Missing code or code verifier");
      return;
    }

    const exchangeToken = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3010/api/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, codeVerifier }),
        });

        const data = await response.JSON();

        if (data.access_token) {
          sessionStorage.setItem("access_token", data.access_token);
          navigate("/");
        } else {
          console.error("No access token in response", data);
        }
      } catch (error) {
        console.error("Token exchange failed", error);
      }
    };

    exchangeToken();
  }, [searchParams, navigate]);
  
  return (
    <div>
      <p>Connecting to Spotify</p>
    </div>
  );
}

export default SpotifyCallback;
