import styled, { css } from 'styled-components'
import { borderRadius } from 'styled-system'

export const Figure = styled.div<{ width?: number | string, height?: number | string, borderRadius?: number | string }>`
  display: flex;
  align-items: center;
  margin: 0;

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${borderRadius}
`