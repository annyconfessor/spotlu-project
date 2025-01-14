import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const ButtonComponent = ({ children, width, onClick }: ButtonProps) => {
  return( 
    <StyledButton onClick={onClick} width={width}>
      {children}
    </StyledButton>
  )
}