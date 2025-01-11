import { clientId, currentToken, tokenEndpoint } from "@/constants/config";

const refreshToken = async () => {
  try {
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
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.status} ${response.statusText}`);
    }

    return await response.json();

  } catch (e) {
    console.error('Error refreshing token:', e)
    throw e
  }
}

export default refreshToken