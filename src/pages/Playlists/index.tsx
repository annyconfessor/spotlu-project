import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"
import { images } from "@/assets"

const Playlists = () => {
  const { playlists } = useMediaProfile()
  
  if(!playlists) {
    return (
      <ContainerLayout>
        <Box height="100vh"/>
      </ContainerLayout>
    )
  }
  
  const parsedItems = playlists?.["items"]
  console.log('parsedItems', parsedItems)
  
  const renderPlaylists = () => {
    return parsedItems?.map((item, index) => {
      const coverImagUrl = item?.images?.[0].url
      const defaultImage = coverImagUrl ? coverImagUrl : images['musicNote']
      
      return(
          <Box 
          key={index} 
          paddingBottom={1.5} 
          paddingTop={1.5} 
          hoverBg="rgba(169, 169, 169, 0.3)"
          borderRadius={10}>
            <CardItem
            name={item?.name}
            alt={item.name}
            description={item.release_date}
            url={defaultImage}/>  
          </Box>
      )
      }
    )
  }

  return(
    <ContainerLayout>
      <Box width="80vw">
        <HeaderComponent 
        title="Minhas Playlists" 
        subtitle="Sua coleção pessoal de playlists"
        hasIcon />
        {playlists && renderPlaylists()}
      </Box>
    </ContainerLayout>
  )
}

export default Playlists