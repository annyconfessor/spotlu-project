import LoginAuthorization from '@/auth';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
// import { useEffect } from 'react';
import { currentToken } from '@/constants/config';
import Artists from '@/pages/Artists';

const AppRouter = () => {

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = Boolean(currentToken.access_token)
    if (!isAuthenticated) {
      <Navigate to="/"/>
      return null;
    }

    return children;
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