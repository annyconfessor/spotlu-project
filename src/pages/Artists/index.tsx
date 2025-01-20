import { Box, CardItem, Text } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useInfiniteScroll } from "@/hooks/useIfiniteScroll"

const Artists = () => {
  const { artists: inicialArtists } = useMediaProfile();
  const { moreArtists, hasMore, isLoading } = useInfiniteScroll();
  const [artists, setArtists] = useState(inicialArtists?.["items"] || []);
  const navigate = useNavigate()
  const addedArtists = moreArtists


  useEffect(() => {
    if (inicialArtists?.items) {
      setArtists(inicialArtists.items)
    }
  }, [inicialArtists])

  useEffect(() => {
    if (addedArtists) {
      setArtists((prev) => {
        return(
          [...prev, ...addedArtists]
        )
      }
      )
    }
  }, [addedArtists])

  const handleArtistId = (index) => {
    const artistId = artists[index]?.id
    return navigate(`/artists/${artistId}/albums`)
  }

  if(!artists) {
    return (
      <ContainerLayout>
        <Box height="100vh"/>
      </ContainerLayout>
    )
  }

  const renderCardItems = () => {
    return artists.map((item, index) => (
      <Box 
      key={index} 
      paddingBottom={1.5} 
      paddingTop={1.5} 
      hoverBg="rgba(169, 169, 169, 0.3)" 
      borderRadius={10}
      onClick={() => handleArtistId(index)}>
        <CardItem
        name={item.name}
        alt={item.name}
        url={item.images[0].url}
        borderRadius={50}/>
      </Box>
    ))
  }

  return(
    <ContainerLayout>
      <Box minWidth="80vw" minHeight="100vh">
        <HeaderComponent
          title="Top Artists"
          subtitle="Aqui você encontra seus artistas preferidos"
        />
        {artists.length > 0 ? (
          renderCardItems()
        ) : (
          <Text variant="paragraph">Nenhum artista encontrado.</Text>
        )}
        {isLoading && hasMore && (
          <Text variant="paragraph">Carregando mais artistas...</Text>
        )}
      </Box>
    </ContainerLayout>
  )
}

export default Artists