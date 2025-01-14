import { Box, CardItem } from "@/components"
import { ContainerLayout } from "@/components/Container"
import { HeaderComponent } from "@/components/Header"
import useScroll from "@/hooks/useScroll"

const Artists = () => {
  const { data } = useScroll()
  const parsedItems = data?.["items"] || []
  console.log('0', parsedItems)

  if(!data || !Array.isArray(data["items"]) || data["items"].length === 0) {
    <h1>Loading...</h1>
  }

  const renderCardItems = () => {
    return parsedItems.map((item, index) => (
      <Box key={index} paddingBottom={20} paddingTop={10} hoverBg="rgba(169, 169, 169, 0.3)" borderRadius={10}>
        <CardItem
        name={item.name}
        alt={item.name}
        url={item.images[0].url}
        />
      </Box>
    ))
  }

  return(
    <ContainerLayout>
      <Box padding={30}>
        <HeaderComponent 
        title="Top Artists" 
        subtitle="Aqui você encontra seus artistas preferidos" 
        onClick={()=>{}}/>
        {data && parsedItems.length > 0 && renderCardItems()}
      </Box>
    </ContainerLayout>
  )
}

export default Artists