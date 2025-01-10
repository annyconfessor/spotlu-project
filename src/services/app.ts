import { clientId, redirectUri, scope, code, authUrl, currentToken } from "./consts";
import getToken from "./getToken"

if (code) {
  const token = await getToken(code)
  currentToken.save(token)
}

const redirectToSpotifyAuthorize = async () => {
// verification code: high entropy encrypted random string
  const generateRandomString = (length: number) => {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }

  const codeVerifier  = generateRandomString(64);

// Convert the verification code to hash with SH256 algorithm
  const sha256 = async (plain: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
  }

// base64 representation function
  const base64encode = (input: ArrayBuffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  }

  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)

  window.localStorage.setItem('code_verifier', codeVerifier);

// params that goes on url
  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString()
}

// click hadlers
export const loginWithSpotifyClick = async () => {
  await redirectToSpotifyAuthorize()
}
