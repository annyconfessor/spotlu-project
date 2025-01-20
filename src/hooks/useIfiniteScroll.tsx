import { useCallback, useEffect, useState } from "react";
import { getArtists, getMoreArtists } from "@/services/getArtists";

export const useInfiniteScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Inicialmente assumimos que há mais itens
  const [moreArtists, setMoreArtists] = useState([]);
  const [offset, setOffset] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 20;

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const limitHold = document.documentElement.offsetHeight - 100;

    if (scrollPosition >= limitHold && hasMore && !isScrolling) {
      setIsScrolling(true);
    }
  }, [hasMore, isScrolling]);

  useEffect(() => {
    if (!hasMore || isScrolling) return;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hasMore, isScrolling]);

  useEffect(() => {
    if (!isScrolling) return;

    const fetchMoreArtists = async () => {
      try {
        setIsLoading(true);
        const moreItems = await getMoreArtists({ offset, limit });

        setMoreArtists((prev) => [...prev, ...moreItems.items]); // Adiciona os novos artistas ao estado atual

        const artists = await getArtists();
        const total = moreItems.total;
        const topArtists = artists.items.length;

        setHasMore(total > topArtists + offset);
        setOffset((prev) => prev + limit);
      } catch (error) {
        console.error("Erro ao carregar mais artistas:", error);
      } finally {
        setIsScrolling(false);
        setIsLoading(false);
      }
    };

    fetchMoreArtists();
  }, [isScrolling, offset, limit]);

  return { isScrolling, hasMore, moreArtists, isLoading };
};
