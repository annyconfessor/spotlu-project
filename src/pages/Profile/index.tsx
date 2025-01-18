import { Avatar, Box, Button } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { Text } from "@/components"
import { logoutClick } from "@/hooks/useAuth"
import useMediaProfile from "@/hooks/useMediaProfile"
import { images } from "@/assets"

const Profile = () => {
  const { userData } = useMediaProfile()
  const userName = userData?.display_name
  const url = userData?.["images"][0]?.url
  const profileImage = url ? url : images['defaultProfileImage']

  return(
    <ContainerLayout>
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center"
      minWidth="75vw" 
      height="80vh" 
      alignItems="center">
        <Avatar borderRadius={100} url={profileImage} size="medium"/>
        <Text variant="heading" padding={20}>{userName}</Text>
        <Button width={113} onClick={logoutClick}>Sair</Button>
      </Box>
    </ContainerLayout>
  )
}

export default Profile