import getAlbuns from "@/services/getAlbuns"
import getArtists from "@/services/getArtists"
import getPlaylists from "@/services/getPlaylists"
import getSpotifyUserData from "@/services/getSpotifyUserData"
import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"

const useMediaProfile = () => {
  const [ artists, setArtists ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ albums, setAlbums ] = useState(null)
  const [ playlists, setPlaylists ] = useState(null)
  const [ userData, setUserData ] = useState(null)
  const { artistId } = useParams()

  const fetchArtists = useCallback(async () => {

    if (isLoading) return

    setIsLoading(true)

    try {
      const artists = await getArtists()
      if (artists && Array.isArray(artists.items)) {
        setArtists(artists)
      } else {
        console.error("formato de dado invalido")
      }
      return artists
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  const fetchAlbums = useCallback(async ({artistId}) => {
  
    if (isLoading) return

    setIsLoading(true)

    try {
      const albuns = await getAlbuns({ artistId })
      console.log('res', albuns["items"][0].artists[0].name)
      setAlbums(albuns)
      return albuns
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  const fetchPlaylists = useCallback(async () => {
  
    if (isLoading) return
    setIsLoading(true)

    try {
      const playlists = await getPlaylists()
      setPlaylists(playlists)
      return playlists
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  const fetchProfileData = useCallback(async () => {

    if (isLoading) return
    setIsLoading(true)

    try {
      const userData = await getSpotifyUserData()
      setUserData(userData)
      return userData
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  useEffect(() => {
    fetchArtists()
    fetchAlbums({artistId})
    fetchPlaylists()
    fetchProfileData()
  }, [fetchArtists, fetchAlbums, artistId, fetchPlaylists, fetchProfileData])

  return { artists, isLoading, albums, playlists, userData }
}

export default useMediaProfile
