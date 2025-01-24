import { images } from "@/assets"

export type ImageProps = {
  name: keyof typeof images
  alt?: string
  width?: number | string
  height?: number | string
  onClick?: () => void
}