import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Container"
import { HeaderComponent } from "@/components/Header"
import useScroll from "@/hooks/useScroll"

const Playlists = () => {
  const { playlists } = useScroll()

  const parsedItems = playlists?.["items"]
  console.log('PLAYLISTS', playlists?.["items"][0].name)

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
      <Box padding={30}>
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