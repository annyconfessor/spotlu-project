import { Box, CardItem } from "@/components"
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
      <Box key={index} padding={20}>
        <CardItem
        name={item.name}
        alt={item.name}
        url={item.images[0].url}
        />
      </Box>
    ))
  }

  return(
    <>
      <h1>Artists:</h1>
      <Box>
        {data && parsedItems.length > 0 && renderCardItems() }
      </Box>
    </>
  )
}

export default Artists