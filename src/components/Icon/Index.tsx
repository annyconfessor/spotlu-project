import { icons } from "@/assets"
import { Figure, StyledIcon } from "./styles"

import { IconProps } from "./types"

export const IconComponent = ({ name, alt, width, height }: IconProps) => {
  return(
    <Figure width={width} height={height}>
      <StyledIcon src={`${icons[name]}`} alt={alt} />
    </Figure>
  )
}