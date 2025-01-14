import { Figure, StyledImage } from "./styles"

import { AvatarProps } from "./types"

export const AvatarComponent = ({ alt, width, height, url, borderRadius, name }: AvatarProps) => {
  return(
    <Figure width={width} height={height} borderRadius={borderRadius}>
      <StyledImage alt={alt} src={name ? name : url} borderRadius={borderRadius} />
    </Figure>
  )
}