import { Figure, StyledImage } from "./styles"
import { AvatarProps } from "./types"

const imageSizes = {
  small: 72,
  medium: 128,
  large: 256
}

export const AvatarComponent = ({ url, size = 'medium', borderRadius, name }: AvatarProps) => {
  return(
    <Figure
    size={imageSizes[size]}
    borderRadius={borderRadius}>
      <StyledImage 
      src={name ? name : url} 
      borderRadius={borderRadius}/>
    </Figure>
  )
}