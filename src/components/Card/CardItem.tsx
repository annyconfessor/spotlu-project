import Text from "@/components/Text"
import { CardItemProps } from './types'
import { Box, Avatar } from '..'

export const CardItemComponent = ({ name, description, url, alt, borderRadius, onClick }: CardItemProps) => {

  
  return( 
    <Box
    display="flex" 
    justifyContent="start"
    alignItems="center"
    width={786}
    height={64}
    data-testid="card-item-box"
    padding={15}
    onClick={onClick}
    >
      <Avatar 
      width={72} 
      height={72} 
      url={url} 
      alt={alt}
      borderRadius={borderRadius ? borderRadius : 0}
      />
      <Box display="flex" flexDirection="column" justifyContent="start">
        <Text variant="paragraph" padding={10}>{name}</Text>
        {description && <Text variant="subParagraph" padding={10}>
          {description}
        </Text>}
      </Box>
    </Box>
  )
}