import { icons } from "@/assets"
import { Avatar, Box } from ".."
import { MenuGroup } from "./MenuGroup"

export const MenuComponent = () => {
  const name = 'spotifyLogo'

  return(
    <Box 
    display="flex"
    flexDirection="column"
    minWidth={250} 
    height={796}
    background="#000000">
      <Box padding={20}>
        <Avatar name={`${icons[name]}`} width={150}/>
      </Box>
      <MenuGroup />
    </Box>
  )
}