import { Avatar, Box, Button } from "@/components"
import { ContainerLayout } from "@/components/Layout"
import { Text } from "@/components"
import { logoutClick } from "@/hooks/useAuth"
import useMediaProfile from "@/hooks/useMediaProfile"

const Profile = () => {
  const { userData } = useMediaProfile()
  const name = userData?.display_name
  const userProfileImage = userData?.["images"][0].url

  return(
    <ContainerLayout>
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center"
      minWidth="75vw" 
      height="80vh" 
      alignItems="center">
        <Avatar borderRadius={100} url={userProfileImage} size="medium"/>
        <Text variant="heading" padding={20}>{name}</Text>
        <Button width={113} onClick={logoutClick}>Sair</Button>
      </Box>
    </ContainerLayout>
  )
}

export default Profile