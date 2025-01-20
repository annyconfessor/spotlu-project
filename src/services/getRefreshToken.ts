import { clientId, currentToken, tokenEndpoint } from "@/constants/config";

const getRefreshToken = async () => {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'refresh_token',
      refresh_token: currentToken.refresh_token || ''
    }),
  })

  if (!response.ok) throw new Error(`Failed to refresh token: ${response.status} ${response.statusText}`)

  return await response.json()

}

export default getRefreshToken