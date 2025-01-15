import { images } from "@/assets"
import { Avatar, Box } from ".."
import { MenuGroup } from "./MenuGroup"

export const MenuComponent = () => {
  const name = 'spotifyLogo'

  return(
    <Box 
    display="flex"
    flexDirection="column"
    minWidth={250} 
    height="100vh"
    background="#000000">
      <Box padding={20}>
        <Avatar name={`${images[name]}`} width={150}/>
      </Box>
      <MenuGroup />
    </Box>
  )
}