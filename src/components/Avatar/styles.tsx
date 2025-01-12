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

export const StyledImage = styled.img<{ src: string, borderRadius?: number | string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${({ borderRadius }) => css`
    border-radius: ${borderRadius ? `${borderRadius}px` : `${0}px`};
  `}
`