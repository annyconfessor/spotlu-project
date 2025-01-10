import styled from 'styled-components'
import { space, layout, flexbox, grid, position } from 'styled-system';
import { BoxProps } from './types';

export const BoxComponent = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${position}
`;