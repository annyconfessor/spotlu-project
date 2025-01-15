import { Box, Image } from ".."
import { MenuGroup } from "./MenuGroup"

export const MenuComponent = () => {

  return(
    <Box 
    display="flex"
    flexDirection="column"
    minWidth={250} 
    height="100vh"
    background="#000000">
      <Box padding={20}>
        <Image name="spotifyLogo" width={164} />
      </Box>
      <MenuGroup />
    </Box>
  )
}