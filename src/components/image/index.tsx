import { Figure, StyledImage } from "./styles"

import { ImageProps } from "./types"

export const ImageComponent = ({ alt, name, width, height }: ImageProps) => {
  return(
    <Figure width={width} height={height}>
      <StyledImage alt={alt} src={`images[${name}]`}></StyledImage>
    </Figure>
  )
}