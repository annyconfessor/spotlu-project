import { ContainerLayoutProps } from './types'
import { StyledContainerLayout } from './styles'
import { Menu, Box } from '@/components'

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <StyledContainerLayout>
      <Box display="flex">
        <Menu />
        {children}
      </Box>
    </StyledContainerLayout>
  )
}