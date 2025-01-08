import styled from 'styled-components'

import { BoxProps } from './types';

import {
  space,
  layout,
  flexbox,
  grid,
  border,
  position,
  textAlign,
  color,
  borderColor,
  borderRadius,
} from 'styled-system';

export const BoxComponent = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${borderRadius}
  ${position}
  ${textAlign}
  ${borderColor}
  ${color}
`;