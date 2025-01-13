import styled from 'styled-components'
import { space, layout, flexbox, position, textAlign, background } from 'styled-system';
import { BoxPropsExtended } from './types';

export const StyledBoxComponent = styled.div
.withConfig({
  shouldForwardProp: (prop) => ![
    'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
    'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
    'display', 'alignItems', 'justifyContent', 'flexDirection', 'flexWrap',
    'position', 'top', 'right', 'bottom', 'left',
    'textAlign', 'fontSize', 'color', 'background', 'backgroundColor',
    'activeBg'
  ].includes(prop)
})<BoxPropsExtended>`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${textAlign}
  ${background}
  
  transition: background-color 0.3s ease;
  
  &:active {
    background-color: ${(props) => props.activeBg || 'transparent'}
    }
  `