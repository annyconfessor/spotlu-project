import { currentToken, spotifyEndpoint } from '../constants/config'

type AlbunsTypes = {
  id: string
}

const getAlbuns = async ({ id }: AlbunsTypes) => {
  try {
    const response = await fetch(`${spotifyEndpoint}/me/top/artists${id}/albuns`, {
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

export default getAlbuns
