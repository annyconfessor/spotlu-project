import { Figure, StyledImage } from "./styles"
import { AvatarProps } from "./types"
import { images } from "@/assets"

const SIZES = {
  small: 72,
  medium: 128,
  large: 256
}

export const AvatarComponent = ({ url, size = 'medium', borderRadius, name }: AvatarProps) => {
  return(
    <Figure
    size={SIZES[size]}
    borderRadius={borderRadius}>
      <StyledImage 
      src={name ? name : url} 
      borderRadius={borderRadius} />
    </Figure>
  )
}