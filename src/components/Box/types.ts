import { SpaceProps, LayoutProps, FlexboxProps, PositionProps, TextAlignProps, BackgroundProps } from 'styled-system'

  export interface BoxPropsExtended 
    extends SpaceProps,
      LayoutProps,
      FlexboxProps,
      PositionProps,
      TextAlignProps,
      BackgroundProps,
      React.HTMLAttributes<HTMLDivElement> {
        activeBg?: string
        style?: React.CSSProperties
      }