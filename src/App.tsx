import { Box } from "./components"
import Button from "./components/Button"
import Text from "./components/text"
import { GlobalStyles } from "./GlobalStyles"

const App = () =>{

  return (
    <Box>
      <GlobalStyles/>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text variant="paragraph">Entre com sua conta Spotify clicando no botão abaixo</Text>
        <Button width={133}>Entrar</Button>
      </Box>
    </Box>
  )
}

export default App
