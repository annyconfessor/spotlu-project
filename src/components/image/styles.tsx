import styled from "styled-components";

export const StyledImage = styled.img`
width: ${(width) => `${width}rem`}
height: ${(height) => `${height}rem`}

.figure {
  width: 100%;
  height: 100%;
  object-fit: cover
}
`