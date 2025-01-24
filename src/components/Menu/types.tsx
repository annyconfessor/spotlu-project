import { IconsEnum } from "../Icon/enum"

export type MenuItemsProps = {
  route: string
  nameIcon: IconsEnum
  onClick?: () => void
}