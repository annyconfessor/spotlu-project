import { GlobalStyles } from "./GlobalStyles"
import AppRouter from "./router/AppRouter"
import { Router } from "./router/Router"

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App