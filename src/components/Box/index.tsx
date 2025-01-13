import styled from 'styled-components'
import { space, layout, flexbox, position, textAlign, background } from 'styled-system';
import { BoxProps } from './types';

export const BoxComponent = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${textAlign}
  ${background}
  
  transition: background-color 0.3s ease;
  
  &:active {
    background-color: ${(props) => props.activeBg}
    }
  `