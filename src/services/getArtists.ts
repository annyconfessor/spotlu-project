import { currentToken, spotifyEndpoint } from '../constants/config'

type getMoreArtistsProps = {
  offset?: number
  limit?: number
}

const getArtists = async () => {
  const response = await fetch(`${spotifyEndpoint}/me/top/artists`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
  })

  return await response.json()
}
const getMoreArtists = async ({ offset, limit }: getMoreArtistsProps) => {
  const response = await fetch(`${spotifyEndpoint}/me/top/artists?offset=${offset}&limit=${limit}`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
  })

  return await response.json()
}

export { getArtists, getMoreArtists }