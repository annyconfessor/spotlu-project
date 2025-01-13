import styled, { css } from 'styled-components'

export const Figure = styled.div<{ width?: number | string, height?: number | string}>`
  display: flex;
  align-items: center;
  margin: 0;

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`

export const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`