import { images } from "@/assets"
import { StyledImage } from "./styles"

type ImageProps = {
  alt: string
  name: typeof images
  width: number
}

export const ImageComponent = ({ alt, name }: ImageProps) => {
  return(
    <StyledImage alt={alt} src={`images[${name}]`}>
      <figure></figure>
    </StyledImage>
  )
}