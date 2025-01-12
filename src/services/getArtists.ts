import { currentToken, spotifyEndpoint } from '../constants/config'

const getArtists = async () => {
  try {
    const response = await fetch(`${spotifyEndpoint}/me/top/artists`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
    }
  
    return await response.json()

  } catch (e) {
    console.error('Error fetching user data:', e)
    throw e
  }
}

export default getArtists