import { StyledButton } from './styles'

type ButtonProps = {
  children: React.ReactNode
  width: number,
  onClick: () => void
}

export const ButtonComponent = ({ children, width, onClick }: ButtonProps) => {
  return( 
    <StyledButton onClick={onClick} width={width}>
      {children}
    </StyledButton>
  )
}