import { useNavigate } from "react-router-dom"
import { Box } from ".."
import { MenuItem } from "./MenuItem"
import { IconsEnum } from "../Icon/enum"

export const MenuGroup = () => {
  const navigate = useNavigate()
  return(
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-around">
      <MenuItem route='Home' nameIcon={IconsEnum.Home} onClick={() => navigate('/home')}/>
      <MenuItem route='Artists' nameIcon={IconsEnum.Disc} onClick={() => navigate('/artists')}/>
      <MenuItem route='Playlists' nameIcon={IconsEnum.Play} onClick={() => navigate('/playlists')}/>
      <MenuItem route='Perfil' nameIcon={IconsEnum.User} onClick={() => navigate('/profile')}/>
    </Box>
  )
}