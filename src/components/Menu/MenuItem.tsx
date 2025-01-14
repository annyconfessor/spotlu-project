import Text from "../Text"
import { MenuItemsProps } from "./types"
import { Box, Icon } from ".."

export const MenuItem = ({ route, nameIcon }: MenuItemsProps) => {

  return( 
    <Box
    route={route}
    display="flex"
    borderRadius={10}
    justifyContent="start"
    alignItems="center"
    cursor="pointer"
    >
      <Box ml={1}>
        <Icon name={nameIcon} width={24} height={24} fill="#FFFFFF" />
      </Box>
      <Text padding={20} variant="subheading">{route}</Text>
    </Box>
  )
}