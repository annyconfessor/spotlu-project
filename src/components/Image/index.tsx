import { images } from "@/assets"
import { Figure, StyledIcon } from "./styles"

import { ImageProps } from "./types"

export const ImageComponent = ({ name, alt, width, height, onClick }: ImageProps) => {
  return(
    <Figure width={width} height={height} onClick={onClick}>
      <StyledIcon src={`${images[name]}`} alt={alt}/>
    </Figure>
  )
}