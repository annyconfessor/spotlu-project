import { useNavigate } from 'react-router-dom'
import { Box, Icon } from '..'
import Text from '../Text'
import { HeaderProps } from './types'

export const HeaderComponent = ({ title, subtitle, hasIcon }: HeaderProps) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }
  
  return( 
    <Box display="flex" alignItems="center" padding={20}>
      {hasIcon && 
      <Box marginRight={20}>
        <Icon cursor name="arrowLeft" onClick={handleNavigate}/>
      </Box>}
      <Box display="flex" flexDirection="column" alignItems="start">
        <Text variant="title">{title}</Text>
        <Box paddingTop={subtitle ? 10: 0}>
          <Text variant='subtitle'>{subtitle}</Text>
        </Box>
      </Box>
    </Box>
  )
}