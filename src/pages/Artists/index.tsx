import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"
import { useNavigate } from "react-router-dom"

const Artists = () => {
  const { artists } = useMediaProfile()
  const parsedItems = artists?.["items"] || []
  const navigate = useNavigate()
  
  const handleArtistID = (index) => {
    const artistId = parsedItems[index].id
    return navigate(`/artists/${artistId}/albums`)
  }

  const renderCardItems = () => {
    return parsedItems.map((item, index) => (
      <Box 
      key={index} 
      paddingBottom={1.5} 
      paddingTop={1.5} 
      hoverBg="rgba(169, 169, 169, 0.3)" 
      borderRadius={10}
      onClick={() => handleArtistID(index)}>
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
      <Box>
        <HeaderComponent 
        title="Top Artists" 
        subtitle="Aqui você encontra seus artistas preferidos" />
        {artists && parsedItems.length > 0 && renderCardItems()}
      </Box>
    </ContainerLayout>
  )
}

export default Artists