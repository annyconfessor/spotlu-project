import { icons } from "@/assets"
import { Figure, StyledIcon } from "./styles"

import { IconProps } from "./types"

export const IconComponent = ({ name, alt, width, height, fill, onClick, cursor }: IconProps) => {
  return(
    <Figure width={width} height={height} onClick={onClick} cursor={cursor}>
      <StyledIcon src={`${icons[name]}`} alt={alt} color={fill}/>
    </Figure>
  )
}