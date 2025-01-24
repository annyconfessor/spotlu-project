import { IconsEnum } from "./enum"

export type IconProps = {
  name: IconsEnum
  alt?: string
  width?: number | string
  height?: number | string
  onClick?: () => void
  cursor?: boolean
}