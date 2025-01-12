import Text from "@/components/Text"
import { CardProps } from './types'
import { Box, Avatar } from '..'

export const CardComponent = ({ name, description, url }: CardProps) => {
  return( 
    <Box 
    display="flex" 
    justifyContent="space-around"
    width={200}
    height={72}
    >
      <Avatar 
      width={72} 
      height={72} 
      url={url} 
      alt="angèle"
      borderRadius={50}
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text variant="paragraph" padding={10}>{name}</Text>
        {description && <Text variant="subParagraph">{description}</Text>}
      </Box>
    </Box>
  )
}