import { useNavigate } from "react-router-dom"
import { Box } from ".."
import { MenuItem } from "./MenuItem"

export const MenuGroup = () => {
  const navigate = useNavigate()
  return(
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      padding={20}>
      <MenuItem route='Home' nameIcon='home' onClick={() => navigate('/home')}/>
      <MenuItem route='Artists' nameIcon='disc' onClick={() => navigate('/artists')}/>
      <MenuItem route='Playlists' nameIcon='play' onClick={() => navigate('/playlists')}/>
      <MenuItem route='Perfil' nameIcon='user' onClick={() => navigate('/profile')}/>
    </Box>
  )
}