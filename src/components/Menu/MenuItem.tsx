import Text from "../Text"
import { MenuItemsProps } from "./types"
import { Box, Icon } from ".."

export const MenuItem = ({ route, nameIcon }: MenuItemsProps) => {
  return( 
    <Box
    width={140}
    height={48}
    route={route}
    display="flex"
    borderRadius={10}
    justifyContent="start"
    alignItems="center"
    hoverBg="rgba(169, 169, 169, 0.1)"
    background="#000000">
      <Icon name={nameIcon} width={24} height={24} />
      <Text padding={20} variant="subheading">{route}</Text>
    </Box>
  )
}