import { Box, Icon } from ".."
import { Text } from "../Text"
import { ModalProps } from "./types"

export const ModalComponent = ({ playlistName }: ModalProps) => {
  return( 
    <Box
    width={600}
    height={346}
    background="#303030"
    borderRadius={32}>
      <Box display="flex" justifyContent="end" paddingRight={10}>
        <Icon name="close" />
      </Box>
      <Box
        width={568}
        height={208}
        display="flex"
        flexDirection="column">
        <Text variant="paragraph">Dê um nome a sua playlist</Text>
        <Text variant="heading">{playlistName}</Text>
        <Box width={504} height={1} background="#D3DADD"/>
      </Box>
    </Box>
  )
}