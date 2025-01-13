import styled from 'styled-components'
import { space, layout, flexbox, position, textAlign, background, border } from 'styled-system';
import { BoxPropsExtended } from './types';

export const StyledBoxComponent = styled.div
.withConfig({
  shouldForwardProp: (prop) => ![
    'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
    'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
    'display', 'alignItems', 'justifyContent', 'flexDirection', 'flexWrap',
    'position', 'top', 'right', 'bottom', 'left',
    'textAlign', 'fontSize', 'color', 'background', 'backgroundColor', 'borderRadius',
    'hoverBg', 'route'
  ].includes(prop)
})<BoxPropsExtended>`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${textAlign}
  ${background}
  ${border}

  
  transition: background-color 0.3s ease;
  border-radius: ${(props) => props.borderRadius};
  
  &:hover {
    background-color: ${(props) => props.hoverBg}
    }
    `