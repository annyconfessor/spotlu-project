import useMediaProfile from "@/hooks/useMediaProfile"
import { Box, Button, Icon, Text, Input } from ".."
import { ModalProps } from "./types"
import { createPlaylist } from "@/services/createPlaylist"
import { useState } from "react"

export const ModalComponent = ({ onClose }: ModalProps) => {
  const [playlistName, setPlaylistName] = useState('')
  const description = ''
  const { userId } = useMediaProfile()

  const handleCreatePlaylist = async (playlistName: string, description: string) => {

    try {
      const newPlaylist = await createPlaylist({ 
        userId: userId, 
        playlistName: playlistName, 
        description: description
      })
    } catch (error) {
      console.error("Failed to create playlist:", error)
    }
  }

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setPlaylistName(e.target.value)
  }

  return( 
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="modal-overlay"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      zIndex={999}
      borderRadius={32}>
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        alignItems="center"
        justifyContent="space-between"
        width="40%"
        height="40%" 
        background="#303030"
        borderRadius={32}
        zIndex={1000}>
          <Box display="flex" justifyContent="end" width="97%" marginTop={10}>
            <Icon name="close" onClick={onClose} aria-label="Close modal"/>
          </Box>
          <Box 
            display="flex" 
            flexDirection="column"
            width="70%"
            alignItems="center" 
            justifyContent="center"
            borderBottomColor="white"
            borderBottomWidth={1}
            borderStyle="solid">
            <Text padding={10} variant="paragraph">Dê um nome a sua playlist</Text>
            <Input onChange={handleEvent}/>
          </Box>
          <Box paddingBottom={40}>
            <Button 
            width={120}
            onClick={() => handleCreatePlaylist(playlistName, description)}>
              Criar
            </Button>
          </Box>
      </Box>
    </Box>
  )
}