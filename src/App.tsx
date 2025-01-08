import { Box } from "./components"
import Button from "./components/Button"
// import Text from "./components/text"
import { GlobalStyles } from "./GlobalStyles"

const App = () =>{

  return (
    <>
      <GlobalStyles/>
      <Box>
        {/* <Text variant="paragraph">Entre com sua conta Spotify clicando no botão abaixo</Text> */}
        <Button width={133}>Entrar</Button>
      </Box>
    </>
  )
}

export default App
