import { Box } from "@/components"
import { Button } from "@/components"
import Text from "@/components/text"
import { loginWithSpotifyClick } from "@/services/app"

const LoginAuthorization = () => {

  const handleLoginWithSpotify = async () => {
    loginWithSpotifyClick()
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

export default LoginAuthorization