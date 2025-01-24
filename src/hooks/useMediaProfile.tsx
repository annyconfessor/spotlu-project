import getAlbums from "@/services/getAlbums"
import { getArtists } from "@/services/getArtists"
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
  const [ userId, setUserId ] = useState('')
  const [total, setTotalPlaylists] = useState(0)
  
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

  const fetchAlbums = useCallback(async ({ artistId }: { artistId: string }) => {
  
    if (isLoading) return

    setIsLoading(true)

    try {
      const albuns = await getAlbums({ artistId })
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
      const total = playlists.total
      setTotalPlaylists(total)
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
      const id = userData.id
      setUserData(userData)
      setUserId(id)
      return userData
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  useEffect(() => {
    fetchArtists()
    if (artistId) {
      fetchAlbums({ artistId })
    }
    fetchPlaylists()
    fetchProfileData()
  }, [
    fetchArtists, 
    fetchAlbums, 
    artistId, 
    fetchPlaylists, 
    fetchProfileData,
  ])

  return { 
    artists, 
    isLoading, 
    albums, 
    playlists, 
    userData, 
    userId,
    total
  }
}

export default useMediaProfile
