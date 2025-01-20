import { getMoreArtists } from "@/services/getArtists"
import { useCallback, useEffect, useState } from "react"

export const useInfiniteScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [moreArtists, setMoreArtists] = useState([])
  const [offset, setOffset] = useState(20)
  const limit = 20

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop
    const limitHold = document.documentElement.offsetHeight

    if (scrollPosition >= limitHold) {
      setIsScrolling(true)
    }
  },[])

  useEffect(() => {
    if (hasMore || isScrolling) return
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[handleScroll, hasMore, isScrolling])

  useEffect(() => {
    if(!isScrolling) return

    try {
      const fetchMoreArtists = async ({ offset, limit }) => {
        const response = await getMoreArtists({ offset: offset, limit: limit })
        setMoreArtists(response)

        const totalArtists = response.total
        const totalTopArtists = response.items.lenght

        if (totalArtists > totalTopArtists) setHasMore(true)

        if (response.items.length < limit) {
          setHasMore(false)
        }
      }

      fetchMoreArtists({ offset, limit })
    } catch (e) {
      console.log(e)
    } finally {
      setIsScrolling(false)
    }
  }, [isScrolling, offset])

  return { isScrolling, hasMore, moreArtists }
}
