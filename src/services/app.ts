import { clientId, redirectUri, scope, code, authUrl, currentToken } from "@/constants/config";
import getToken from "./getToken"
import refreshToken from "./refreshToken";

if (code) {
  const token = await getToken(code)
  currentToken.save(token)
}

if (code) {
  const refreshedToken = await refreshToken()
  currentToken.save(refreshedToken)
}

export const redirectToSpotifyAuthorize = async () => {
  const generateRandomString = (length: number) => {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }

  const codeVerifier  = generateRandomString(64);

  const sha256 = async (plain: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
  }

  const base64encode = (input: ArrayBuffer) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  }

  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)

  window.localStorage.setItem('code_verifier', codeVerifier);

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
