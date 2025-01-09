import styled from 'styled-components'

import { BoxProps } from './types';

import { space, layout, flexbox, grid, position } from 'styled-system';

export const BoxComponent = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${position}
`;