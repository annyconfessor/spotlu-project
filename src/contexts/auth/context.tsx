import { useState, useEffect, useContext, createContext} from 'react'
import { currentToken } from '@/constants/config'
import { AuthContextTypes } from './types'

export const AuthContext = createContext<AuthContextTypes>({ isAuthenticated: false })

const useAuth = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false)
  const token = currentToken.access_token

  useEffect(() => {
    if (token) {
      const token = currentToken.access_token
      const isToken = Boolean(token)
      setIsAuthenticated(isToken)
    }
  }, [token])

  return useContext(AuthContext)
}

export default useAuth