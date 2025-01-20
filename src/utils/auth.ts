import { authUrl, clientId, code, currentToken, redirectUri, scope } from "@/constants/config"
import { base64encode, generateRandomString, sha256 } from "./pkce"
import getRefreshToken from "@/services/getRefreshToken"
import getToken from "@/services/getToken"

if (code) {
  const token = await getToken(code)
  currentToken.save(token)
}

export const redirectToSpotifyAuthorize = async () => {
  const codeVerifier  = generateRandomString(64)

  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)

  window.localStorage.setItem('code_verifier', codeVerifier)

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

export const getValidAccessToken = async () => {
  if (!currentToken.expires) {
    return currentToken.access_token
  }

  return await getRefreshToken()
}