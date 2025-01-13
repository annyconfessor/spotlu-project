import { SpaceProps, LayoutProps, FlexboxProps, PositionProps, TextAlignProps, BackgroundProps, BorderProps } from 'styled-system'

  export interface BoxPropsExtended 
    extends SpaceProps,
      LayoutProps,
      FlexboxProps,
      PositionProps,
      TextAlignProps,
      BackgroundProps,
      BorderProps,
      React.HTMLAttributes<HTMLDivElement> {
        hoverBg?: string
        borderRadius?: number
        style?: React.CSSProperties
      }