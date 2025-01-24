import { useEffect } from "react"
import { Button, Image } from "@/components"
import { Text, Box } from "@/components"
import { currentToken } from "@/constants/config"
import { useNavigate } from "react-router-dom"
import { Heart, StyledBox } from "./styles"
import { loginWithSpotify } from "@/hooks/useAuth"
import { ImagesEnum } from "@/components/Image/enum"

const LoginAuthorization = () => {
  const navigate = useNavigate()
  const url = 'https://www.linkedin.com/in/annyconfessor/'
  
  useEffect(() => {
    const token = currentToken.access_token
    if(token) { 
      navigate('/home')
    }
  }, [navigate, currentToken.access_token])

  const handleLoginWithSpotify = () => {
    loginWithSpotify()
  }

  return (
      <StyledBox paddingBottom={30} display="flex">
        <Box />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image name={ImagesEnum.SpotifyLogo} width={165} height={70}/>
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
            <Text variant="paragraph">
              Made with <Heart>♥︎</Heart> by <a 
              href={url} 
              target="_blank"
              style={{ color: "white", padding: 2 }}>
                Anny Confessor</a>
            </Text>
        </Box>
      </StyledBox>
    
  )
}

export default LoginAuthorization