import { StyledBoxComponent } from './styles';
import { BoxPropsExtended } from './types';

export const BoxComponent = ({ 
  hoverBg, 
  borderRadius, 
  backgroundColor, 
  route, 
  cursor, 
  isHover, 
  ...rest 
}: BoxPropsExtended) => {
  
  return(
    <StyledBoxComponent 
      hoverBg={hoverBg} 
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      cursor={cursor}
      route={route}
      isHover={isHover}
      {...rest}
      />
  )
}