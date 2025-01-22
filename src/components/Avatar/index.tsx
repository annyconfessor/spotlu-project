import { Figure, StyledImage } from "./styles"
import { AvatarProps } from "./types"

const imageSizes = {
  small: 72,
  medium: 128,
  large: 256
}

export const AvatarComponent = ({ url, size = 'medium', borderRadius }: AvatarProps) => {
  return(
    <Figure
    size={imageSizes[size]}
    borderRadius={borderRadius}>
      <StyledImage 
      alt="Avatar"
      src={url} 
      borderRadius={borderRadius}/>
    </Figure>
  )
}