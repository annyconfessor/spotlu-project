import { Text } from "@/components"
import { CardItemProps } from './types'
import { Box, Avatar } from '..'
import { images } from "@/assets"

export const CardItemComponent = ({ name, description, url, borderRadius, onClick }: CardItemProps) => {
  
  return( 
    <Box
    display="flex" 
    justifyContent="start"
    alignItems="center"
    data-testid="card-item-box"
    width="100%"
    padding={10}
    onClick={onClick}>
      <Avatar
      size="small"
      url={url ? url : images['defaultCoverImage']}
      borderRadius={borderRadius ? borderRadius : 0}/>
      <Box display="flex" flexDirection="column" justifyContent="start">
        <Text variant="paragraph" padding={10}>{name}</Text>
        {description && <Text variant="subParagraph" padding={10}>
          {description}
        </Text>}
      </Box>
    </Box>
  )
}