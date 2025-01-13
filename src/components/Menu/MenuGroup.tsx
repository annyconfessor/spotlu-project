import { Box } from ".."
import { MenuItem } from "./MenuItem"

export const MenuGroup = () => {
  return(
    <Box 
      height={174}
      width={140}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      background="#000000"
      >
      <MenuItem route='Home' nameIcon='home' />
      <MenuItem route='Artists' nameIcon='disc' />
      <MenuItem route='Playlists' nameIcon='play' />
      <MenuItem route='Perfil' nameIcon='user' />
    </Box>
  )
}