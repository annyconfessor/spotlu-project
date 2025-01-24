import { useNavigate } from 'react-router-dom'
import { Box, Button, Icon } from '..'
import { Text } from '@/components'
import { HeaderProps } from './types'
import { Modal } from '@/components' 
import { useState } from 'react'
import { IconsEnum } from '../Icon/enum'

export const HeaderComponent = ({ title, subtitle, hasIcon }: HeaderProps) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [playlistName, setPlaylistName] = useState('')
  const [playlistDescription, setPlaylistDescription] = useState('')
  const [item, setItem] = useState(null)

  const goBack = () => navigate(-1)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handlePlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value)
  }

  const handlePlaylistDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistDescription(e.target.value)
  }
  
  return( 
    <Box display="flex" alignItems="center" justifyContent="space-between" paddingBottom={20} width="100%">
      <Box display="flex">
        {hasIcon && 
        <Box marginRight={20}>
          <Icon name={IconsEnum.ArrowLeft} onClick={goBack} width={32} height={32}/>
        </Box>}
        <Box display="flex" flexDirection="column" alignItems="start">
          <Text variant="title">{title}</Text>
          {subtitle && 
          <Box paddingTop={10}>
            <Text variant='subtitle'>{subtitle}</Text>
          </Box>}
        </Box>
      </Box>
      <Button width={185} onClick={openModal}>Criar Playlist</Button>
    
      {isModalOpen &&
      <Box>
        <Modal
          playlistName={playlistName ? playlistName : `Minha Playlist #${item}`}
          description={playlistDescription}
          onClose={closeModal}/>
      </Box>}
    </Box>


  )
}