import React from 'react'
import { ContainerLayoutProps } from './types'
import { StyledContainerLayout } from './styles'
import { MenuGroup } from '@/components/Menu/MenuGroup'
import { Box } from '@/components'

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <StyledContainerLayout>
      <Box display="flex">
        <MenuGroup/>
        {children}
      </Box>
    </StyledContainerLayout>
  )
}