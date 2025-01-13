import { useEffect } from "react"
import { Box } from "@/components"
import { Button } from "@/components"
import Text from "@/components/Text"
import { currentToken } from "@/constants/config"
import { loginWithSpotifyClick } from "@/services/app"
import { useNavigate } from "react-router-dom"

const LoginAuthorization = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = currentToken.access_token
    if(token) {
      navigate('/home')
    }

  }, [navigate])

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