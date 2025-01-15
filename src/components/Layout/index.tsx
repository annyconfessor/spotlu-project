import { ContainerLayoutProps } from './types'
import { StyledContainerLayout } from './styles'
import { Menu, Box } from '@/components'

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
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
    </StyledContainerLayout>
  )
}