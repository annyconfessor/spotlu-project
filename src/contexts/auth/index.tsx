import useAuth, { AuthContext } from './context'
import { AuthContextProviderProps } from './types'

export const AuthContextProvider = ( { children }: AuthContextProviderProps ) => {
  const { isAuthenticated } = useAuth()

  return <AuthContext.Provider value={{isAuthenticated}}>{children}</AuthContext.Provider>
}