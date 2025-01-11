import { AuthContextProvider } from "./contexts/auth"
import { GlobalStyles } from "./GlobalStyles"
import AppRouter from "./router/AppRouter"
import { Router } from "./router/Router"

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <AuthContextProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App