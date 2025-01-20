import { currentToken, spotifyEndpoint } from '../constants/config'

type AlbumsTypes = {
  artistId: string
}

const getAlbums = async ({ artistId }: AlbumsTypes) => {
  const response = await fetch(`${spotifyEndpoint}/artists/${artistId}/albums`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token }
  })

  return await response.json()
}

export default getAlbums
