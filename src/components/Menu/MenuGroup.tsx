import { Box } from ".."
import { MenuItem } from "./MenuItem"

export const MenuGroup = () => {
  return(
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      padding={20}
      >
      <MenuItem route='Home' nameIcon='home' />
      <MenuItem route='Artists' nameIcon='disc' />
      <MenuItem route='Playlists' nameIcon='play' />
      <MenuItem route='Perfil' nameIcon='user' />
    </Box>
  )
}