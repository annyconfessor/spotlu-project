import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useInfiniteScroll } from "@/hooks/useIfiniteScroll"

const Artists = () => {
  const { artists: inicialArtists } = useMediaProfile()
  const { isScrolling, moreArtists } = useInfiniteScroll()
  const [artists, setArtists] = useState(inicialArtists?.["items"] || [])
  const navigate = useNavigate()
  console.log('inicialArtists', inicialArtists?.items)
  console.log('moreArtists', moreArtists?.items)

  useEffect(() => {
    if (inicialArtists?.items) {
      setArtists(inicialArtists.items)
    }

    if (moreArtists?.items) {
      setArtists((prev) => [...prev, ...moreArtists.items])
    }
    
  },[inicialArtists, moreArtists?.items])



  const handleArtistId = (index) => {
    const artistId = artists[index].id
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
        subtitle="Aqui você encontra seus artistas preferidos" />
        {inicialArtists && renderCardItems()}
        {isScrolling && <div>Carregando mais artistas</div>}
      </Box>
    </ContainerLayout>
  )
}

export default Artists