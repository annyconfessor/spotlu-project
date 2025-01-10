const clientId = '7563ca8f3b6c422994549fd36057e586'
const redirectUri = 'http://localhost:5173/'

const scope = 'user-read-private user-read-email'

const authUrl = new URL("https://accounts.spotify.com/authorize")
const tokenEndpoint = "https://accounts.spotify.com/api/token"

const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')

const currentToken = {
  get access_token() { return localStorage.getItem('access_token') || null },
  get refresh_token() { return localStorage.getItem('refresh_token') || null },

  save: function (response: any) {
    const { access_token } = response;
    localStorage.setItem('access_token', access_token);
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
  currentToken
}