import { ContainerLayoutProps } from './types'
import { Heart, StyledContainerLayout } from './styles'
import { Menu, Box, Text } from '@/components'

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  const url = 'https://www.linkedin.com/in/annyconfessor/'

  return (
    <StyledContainerLayout>
      <Box display="flex">
        <Menu />
        <Box
        display="flex" 
        alignItems="center" 
        padding={30}>
          {children}
        </Box>
      </Box>
      <Box 
        width="100%" 
        height={100}
        background="#000000" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        color="##949EA2">
          <Text variant="paragraph">
            Made with <Heart>♥︎</Heart> by <a 
            href={url} 
            target="_blank"
            style={{ color: "white", padding: 2 }}>
              Anny Confessor</a>
          </Text>
      </Box>
    </StyledContainerLayout>
  )
}