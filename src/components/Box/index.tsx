import { StyledBoxComponent } from './styles';
import { BoxPropsExtended } from './types';

export const BoxComponent = ({ activeBg, ...rest }: BoxPropsExtended) => {
  return(
    <StyledBoxComponent activeBg={activeBg} {...rest} />
  )
}