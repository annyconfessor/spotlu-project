import getAlbuns from "@/services/getAlbuns"
import getArtists from "@/services/getArtists"
import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"

const useScroll = () => {
  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ albums, setAlbums ] = useState(null)
  const { artistId } = useParams()

  const fetchArtists = useCallback(async () => {

    if (isLoading) return

    setIsLoading(true)

    try {
      const res = await getArtists()
      if (res && Array.isArray(res.items)) {
        setData(res)
      } else {
        console.error("formato de dado invalido")
      }
      return res
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])

  const fetchAlbums = useCallback(async ({artistId}) => {
  
    if (isLoading) return

    setIsLoading(true)

    try {
      const res = await getAlbuns({ artistId })
      console.log('res', res["items"][0].artists[0].name)
      setAlbums(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }, [isLoading])
  

  useEffect(() => {
    fetchArtists()
    fetchAlbums({artistId})
  }, [fetchArtists, fetchAlbums, artistId])

  return { data, isLoading, albums }
}

export default useScroll
