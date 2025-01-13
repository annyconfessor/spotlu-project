import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  TextAlignProps,
} from 'styled-system';

export type BoxProps =
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  TextAlignProps & {
    backgroundColor?: string
    activeBg?: string
  }