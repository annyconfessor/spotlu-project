import { StyledButton } from './styles'

type ButtonProps = {
  children: React.ReactNode // pode ser text e/ou img
  width: number
}

const Button = ({ children, width }: ButtonProps) => {

  const handleClick = () => {
    console.log("click")
  }
  return( 
    <StyledButton onClick={handleClick} width={width}>
      {children}
    </StyledButton>
  )
}

export default Button