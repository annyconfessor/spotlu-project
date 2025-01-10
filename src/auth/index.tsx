import { Box } from "@/components"
import { Button } from "@/components"
import Text from "@/components/text"
import { loginWithSpotifyClick } from "@/services/app"
import { currentToken } from "@/constants/config"

const Authorization = () => {

  const handleLoginWithSpotify = async () => {
    loginWithSpotifyClick()
    if(currentToken.access_token) console.log(currentToken.access_token)
  }

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text variant="paragraph">Entre com sua conta Spotify clicando no botão abaixo</Text>
        <Button width={133} onClick={handleLoginWithSpotify}>Entrar</Button>
      </Box>
    </>
  )
}

export default Authorization