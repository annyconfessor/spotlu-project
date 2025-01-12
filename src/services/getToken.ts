import { clientId, redirectUri, tokenEndpoint } from "@/constants/config"

const getToken = async (code: string) => {
  const codeVerifier = localStorage.getItem('code_verifier')

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier || '',
    }),
  }

  const response = await fetch(tokenEndpoint, payload)
  return await response.json();
}

export default getToken