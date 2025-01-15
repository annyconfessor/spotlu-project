import { useNavigate } from 'react-router-dom'
import { Box, Button, Icon } from '..'
import { Text } from '../Text'
import { HeaderProps } from './types'

export const HeaderComponent = ({ title, subtitle, hasIcon }: HeaderProps) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  
  return( 
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex">
        {hasIcon && 
        <Box marginRight={20}>
          <Icon name="arrowLeft" onClick={goBack} width={32} height={32}/>
        </Box>}
        <Box display="flex" flexDirection="column" alignItems="start">
          <Text variant="title">{title}</Text>
          {subtitle && <Box paddingTop={subtitle ? 10: 0}>
            <Text variant='subtitle'>{subtitle}</Text>
          </Box>}
        </Box>
      </Box>
      <Button width={185} onClick={() => { /* handle click */ }}>Criar Playlist</Button>
    </Box>
  )
}