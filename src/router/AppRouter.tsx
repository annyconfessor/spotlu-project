import { useEffect, useState } from 'react';
import LoginAuthorization from '@/auth';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import { currentToken } from '@/constants/config';
import Artists from '@/pages/Artists';

const AppRouter = () => {
  const [accessToken, setAccessToken] = useState<string | null>(currentToken.access_token)

  useEffect(() => {
    const token = currentToken.access_token
    setAccessToken(token)
  }, [])

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    if (!accessToken) {
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
      </Router>
  );
};

export default AppRouter;