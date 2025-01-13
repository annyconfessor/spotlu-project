import getArtists from "@/services/getArtists"
import { useState, useEffect, useCallback } from "react"

const useScroll = () => {
  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

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

  useEffect(() => {
    fetchArtists()
  }, [fetchArtists])

  return { data, isLoading }
}

export default useScroll
