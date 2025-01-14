import { useEffect } from "react"
import { Button } from "@/components"
import Text from "@/components/Text"
import { currentToken } from "@/constants/config"
import { loginWithSpotifyClick } from "@/services/app"
import { useNavigate } from "react-router-dom"
import { StyledBox } from "./styles"

const LoginAuthorization = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = currentToken.access_token
    if(token) { 
      navigate('/home')
    }

  }, [navigate, currentToken.access_token])

  const handleLoginWithSpotify = () => {
    loginWithSpotifyClick()
  }

  return (
    <StyledBox>
      <Text variant="paragraph" padding={10}>Entre com sua conta Spotify clicando no botão abaixo</Text>
      <Button width={133} onClick={handleLoginWithSpotify}>Entrar</Button>
    </StyledBox>
  )
}

export default LoginAuthorization