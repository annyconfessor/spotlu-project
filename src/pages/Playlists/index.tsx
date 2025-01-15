import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"

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

  const renderPlaylists = () => {
      return parsedItems?.map((item, index) => (
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
            url={item.images[0].url}/>
          </Box>
      )
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