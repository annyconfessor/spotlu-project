import { Text } from "@/components"
import { MenuItemsProps } from "./types"
import { Box, Icon } from ".."

export const MenuItem = ({ route, nameIcon, onClick }: MenuItemsProps) => {

  return( 
    <Box
    onClick={onClick}
    route={route}
    display="flex"
    borderRadius={10}
    justifyContent="start"
    alignItems="center">
      <Box>
        <Icon name={nameIcon} width={24} height={24} />
      </Box>
      <Text padding={20} variant="subheading"
      >{route}</Text>
    </Box>
  )
}