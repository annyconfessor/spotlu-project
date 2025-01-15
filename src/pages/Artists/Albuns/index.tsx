import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { HeaderComponent } from "@/components/Header"
import useMediaProfile from "@/hooks/useMediaProfile"

const Albums = () => {
  const { albums } = useMediaProfile()

  const parsedItems = albums?.["items"] || []
  const artistName = albums?.["items"][0].artists[0].name

  const renderAlbumsItems = () => {
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
        title={artistName} 
        hasIcon/>
        {albums && renderAlbumsItems()}
      </Box>
    </ContainerLayout>
  )
}

export default Albums