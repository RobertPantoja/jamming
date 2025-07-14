# Jamming 🎧

Jamming is a React + Express web application that allows users to search for tracks on Spotify, build custom playlists, and save them to their Spotify account. This project improves original Jammming project by using a **separate Express backend**, **Authorization Code with PKCE flow** (instead of deprecated Implicit Grant), and real-time playlist synchronization.

---

## 🚀 Features

- **Spotify OAuth with PKCE Flow** (secure & production-ready)
- **Search tracks** using Spotify Web API
- **View and select your existing playlists**
- **Add and remove tracks** from playlists
- **Save playlist** (create or update) directly to your Spotify account
- Built with **React** (frontend) and **Express** (backend)

---

## 📷 Demo

---

## 🧱 Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express
- **Auth:** Spotify OAuth 2.0 with PKCE
- **Deployment-ready:** Fully works with environment variables and HTTPS

---

## 📦 Setup Instructions

### 1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)

Add a Redirect URI: http://127.0.0.1:3000/callback (or change the port if you prefer)

### 2. Clone the repository

```bash
git clone https://github.com/RobertPantoja/jammming.git
cd jammming
```

### 3. Create environment files

- Create a .env file in /client with:

```env
REACT_APP_SPOTIFY_CLIENT_ID=yourClientID
REACT_APP_SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/callback
```

- Create a .env file in /server with:

```env
SPOTIFY_CLIENT_ID=yourClientID
REDIRECT_URI=http://127.0.0.1:3000/callback
CLIENT_URL=http://127.0.0.1:3000
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the app

```bash
npm run start
```

### 6. Open your browser and go

```browser
http://127.0.0.1:3000
```

## 🧠 How It Works

- **Login:** User logs in via Spotify with Authorization Code + PKCE
- **Token Handling:** Auth code is exchanged server-side for an access_token and refresh_token
- **Track Search:** User searches and selects tracks using Spotify's /search endpoint
- **Playlist Selection:** User can choose an existing playlist or create a new one
- **Save Playlist:** If editing an existing playlist → Replace its tracks

## 🔐 Required Scopes

When authenticating with Spotify, the app requests the following scopes:

- user-read-private
- user-read-email
- playlist-read-private
- playlist-modify-public
- playlist-modify-private

## 🛠 Requirements

- Node.js v14 or higher
- npm v7 or higher
- A Spotify Developer Account with a registered app
- Modern browser (tested on Chrome, Firefox)

## ⚠️ Limitations

- 🚫 Cannot update playlists with more than 100 tracks (Spotify API limitation – pagination workaround not yet implemented)
- 🕒 No persistent login: access token is stored in sessionStorage, so users must re-authenticate on refresh or revisit
- 🔐 Refresh token storage is currently in-memory (not scalable for production)

## 🚧 Future Work

**🎨 Improve UI**

- Add responsive design
- Add animations or transitions for better UX

**✅ Implement unit and integration tests**

- Using tools like Jest, React Testing Library

**✨ Add more features**

- Pagination for playlists/tracks
- Ability to rename existing playlists
- Show playlist cover images

**🖌️ Use a UI framework**

- TailwindCSS or Material UI

**🔄 Improve backend workload**

- Move token refresh logic fully to server
- Add persistent session/token storage (e.g., Redis, database)

**🧠 Improve error handling**

- Show error messages in UI
- Add retry logic for failed requests

**🚀 Deploy the app**

- Client: Vercel / Netlify
- Server: Render / Railway / Fly.io
- Use HTTPS + environment config
