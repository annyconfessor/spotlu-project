import { Box, Image } from ".."
import { MenuGroup } from "./MenuGroup"

export const MenuComponent = () => {

  return(
    <Box 
    display="flex"
    flexDirection="column"
    minHeight={100}
    background="#000000"
    padding={30}>
        <Image name="spotifyLogo" width={164} />
      <MenuGroup />
    </Box>
  )
}