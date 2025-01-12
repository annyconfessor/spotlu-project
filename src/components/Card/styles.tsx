import styled from 'styled-components' 

type CardProps = {
  width: number,
  height: number
}

export const StyledCard = styled.div<CardProps>`
width: 150px;
height: 150px;
`