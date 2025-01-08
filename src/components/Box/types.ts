import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BorderProps,
  PositionProps,
  TextAlignProps,
  ColorProps,
  BorderColorProps,
  BorderRadiusProps,
} from 'styled-system';

import { ThemeInterface } from '@/theme/types';

export type BoxProps =
  SpaceProps<ThemeInterface> &
  ColorProps<ThemeInterface> &
  LayoutProps &
  FlexboxProps &
  GridProps<ThemeInterface> &
  BorderProps &
  BorderRadiusProps<ThemeInterface> &
  BorderColorProps<ThemeInterface> &
  PositionProps<ThemeInterface> &
  TextAlignProps;