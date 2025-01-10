import { ThemeInterface } from '@/theme/types';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  PositionProps,
} from 'styled-system';

export type BoxProps =
  SpaceProps<ThemeInterface> &
  LayoutProps &
  FlexboxProps &
  GridProps<ThemeInterface> &
  PositionProps<ThemeInterface>