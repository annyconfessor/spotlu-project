import { useEffect } from "react"
import { Avatar, Button } from "@/components"
import Text from "@/components/Text"
import { currentToken } from "@/constants/config"
import { useNavigate } from "react-router-dom"
import { Img, StyledBox } from "./styles"
import { loginWithSpotifyClick } from "@/hooks/useAuth"
import { images } from "@/assets"

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
    <StyledBox paddingBottom={30}>
      <Avatar name={images["spotifyLogo"]} width={165} height={70}/>
      <Text variant="paragraph" padding={10}>Entre com sua conta Spotify clicando no botão abaixo</Text>
      <Button width={133} onClick={handleLoginWithSpotify}>Entrar</Button>
    </StyledBox>
  )
}

export default LoginAuthorization