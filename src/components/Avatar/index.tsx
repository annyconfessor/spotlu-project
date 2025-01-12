import { Figure, StyledImage } from "./styles"

import { AvatarProps } from "./types"

export const AvatarComponent = ({ alt, width, height, url, borderRadius}: AvatarProps) => {
  return(
    <Figure width={width} height={height}>
      <StyledImage 
      alt={alt} 
      src={url} 
      style={{borderRadius}}/>
    </Figure>
  )
}