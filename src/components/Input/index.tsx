import { StyledInput } from './styles'
import { InputProps } from './types'

export const InputComponent = (
  { placeholder, onChange }: InputProps
) => {
  return( 
    <StyledInput 
    onChange={onChange}
    placeholder={placeholder}
    type="text"/>
  )
}