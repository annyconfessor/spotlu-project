import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  PositionProps,
} from 'styled-system';

import { ThemeInterface } from '@/theme/types';

export type BoxProps =
  SpaceProps<ThemeInterface> &
  LayoutProps &
  FlexboxProps &
  GridProps<ThemeInterface> &
  PositionProps<ThemeInterface>