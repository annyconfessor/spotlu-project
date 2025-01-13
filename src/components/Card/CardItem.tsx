import Text from "@/components/Text"
import { CardProps } from './types'
import { Box, Avatar } from '..'

export const CardItemComponent = ({ name, description, url, alt }: CardProps) => {
  return( 
    <Box 
    activeBg="rgba(169, 169, 169, 0.1)"
    display="flex" 
    justifyContent="start"
    alignItems="center"
    width={886}
    height={72}
    data-testid="card-item-box">
      <Avatar 
      width={72} 
      height={72} 
      url={url} 
      alt={alt}
      borderRadius={50}
      />
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="start"
      style={{ marginLeft: 10 }}>
        <Text variant="paragraph" padding={10}>{name}</Text>
        {description && <Text 
        variant="subParagraph" 
        style={{ margin: 10 }}>
          {description}
        </Text>}
      </Box>
    </Box>
  )
}