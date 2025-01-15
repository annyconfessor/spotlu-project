type AvatarSize = 'small' | 'medium' | 'large';

export type AvatarProps = {
  url?: string
  borderRadius?: number | string,
  name?: string
  size?: AvatarSize
}