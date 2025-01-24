import { Box, Image } from ".."
import { ImagesEnum } from "../Image/enum"
import { MenuGroup } from "./MenuGroup"

export const MenuComponent = () => {

  return(
    <Box 
    display="flex"
    flexDirection="column"
    minHeight={100}
    background="#000000"
    padding={30}>
        <Image name={ImagesEnum.SpotifyLogo} width={164} />
      <MenuGroup />
    </Box>
  )
}