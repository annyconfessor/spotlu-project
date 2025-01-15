import { useEffect } from "react"
import { Avatar, Button } from "@/components"
import { Text, Box } from "@/components"
import { currentToken } from "@/constants/config"
import { useNavigate } from "react-router-dom"
import { StyledBox } from "./styles"
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
    <StyledBox paddingBottom={30} display="flex">
      <Box/>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar name={images["spotifyLogo"]} width={165} height={70}/>
        <Text variant="paragraph" padding={10}>Entre com sua conta Spotify clicando no botão abaixo</Text>
        <Button width={133} onClick={handleLoginWithSpotify}>Entrar</Button>
      </Box>
      <Box 
      width="100%" 
      height={100}
      background="#000000" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      color="##949EA2">
        <Text variant="footer">Feito com 🩵 por Anny Confessor</Text>
      </Box>
    </StyledBox>
  )
}

export default LoginAuthorization