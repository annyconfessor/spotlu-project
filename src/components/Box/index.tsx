import { StyledBoxComponent } from './styles';
import { BoxPropsExtended } from './types';

export const BoxComponent = ({ hoverBg, borderRadius, backgroundColor, route, ...rest }: BoxPropsExtended) => {
  return(
    <StyledBoxComponent 
      hoverBg={hoverBg} 
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      route={route}
      {...rest}
      />
  )
}