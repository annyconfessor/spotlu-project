import styled, { css } from 'styled-components'
import { borderRadius } from 'styled-system'

export const Figure = styled.div<{
  borderRadius?: number | string,
  size: number
 }>`
  display: flex;
  align-items: center;
  margin: 0;

  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
`

export const StyledImage = styled.img<{ borderRadius?: number | string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${borderRadius}
`