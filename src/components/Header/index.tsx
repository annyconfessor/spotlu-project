import { Box, Icon } from '..'
import Text from '../Text'
import { HeaderProps } from './types'

export const HeaderComponent = ({ title, subtitle, onClick }: HeaderProps) => {
  return( 
    <Box display="flex" onClick={onClick}>
      <Icon name="arrowLeft" onClick={onClick}/>
      <Box display="flex" flexDirection="column" padding={30} alignItems="start">
        <Text variant="title">{title}</Text>
        <Box paddingTop={10}>
          <Text variant='subtitle'>{subtitle}</Text>
        </Box>
      </Box>
    </Box>
  )
}