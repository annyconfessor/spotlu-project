// require('dotenv').config()

const clientId = '7563ca8f3b6c422994549fd36057e586'
const redirectUri = 'http://localhost:5173/'

const scope = 'user-read-private user-read-email user-top-read '

const authUrl = new URL("https://accounts.spotify.com/authorize")
const tokenEndpoint = "https://accounts.spotify.com/api/token"
const spotifyEndpoint = "https://api.spotify.com/v1"

const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')

const currentToken = {
  get access_token() { return localStorage.getItem('access_token') || null },
  get refresh_token() { return localStorage.getItem('refresh_token') || null },

  save: function (response: { access_token: string, refresh_token: string }) {
    const { access_token, refresh_token } = response;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token)
  }
}

export {
  clientId,
  redirectUri,
  scope,
  authUrl,
  urlParams,
  code,
  tokenEndpoint,
  currentToken,
  spotifyEndpoint
}