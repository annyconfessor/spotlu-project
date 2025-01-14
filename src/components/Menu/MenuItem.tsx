import Text from "../Text"
import { MenuItemsProps } from "./types"
import { Box, Icon } from ".."
import { useState } from "react"

export const MenuItem = ({ route, nameIcon, onClick }: MenuItemsProps) => {
  const [isHover, setIsHover] = useState(false)

  return( 
    <Box
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onClick={onClick}
    route={route}
    display="flex"
    borderRadius={10}
    justifyContent="start"
    alignItems="center"
    cursor={isHover ? "url('/icon-cursor.png'), auto" : "pointer"}
    >
      <Box>
        <Icon name={nameIcon} width={24} height={24} fill="#FFFFFF" />
      </Box>
      <Text padding={20} variant="subheading" isHover={isHover}
      >{route}</Text>
    </Box>
  )
}