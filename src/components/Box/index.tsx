import { StyledBoxComponent } from './styles';
import { BoxPropsExtended } from './types';

export const BoxComponent = ({ hoverBg, borderRadius, ...rest }: BoxPropsExtended) => {
  return(
    <StyledBoxComponent 
      hoverBg={hoverBg} 
      borderRadius={borderRadius} 
      {...rest}
      />
  )
}