import LoginAuthorization from '@/pages/Login'
import { Routes as Router, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from '@/pages/Home'
import { currentToken } from '@/constants/config'
import Artists from '@/pages/Artists'
import Albums from '@/pages/Artists/Albuns'
import Playlists from '@/pages/Playlists'
import Profile from '@/pages/Profile'


const AppRouter = () => {
  const navigate = useNavigate()

  const expiry = currentToken.expires
  const timestamp = parseInt(expiry)
  const now = new Date().getTime()
  const isExpired = (now >= timestamp)
    
  if (isExpired) {
    console.log('Token expirado')
    localStorage.clear()
    navigate('/')
  }

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    if (!currentToken.access_token) {
      return <Navigate to="/"/>
    }

    return <>{children}</>
  }

  return (
      <Router>
        <Route path="/" element={<LoginAuthorization/>} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/artists" element={
          <PrivateRoute>
            <Artists/>
          </PrivateRoute>
        } />
        <Route path="/artists/:artistId/albums" element={
          <PrivateRoute>
            <Albums/>
          </PrivateRoute>
        } />
        <Route path="/playlists" element={
          <PrivateRoute>
            <Playlists />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        } />
        <Route path='/*' element={<Navigate to="/"/>} />
      </Router>
  )
}

export default AppRouter