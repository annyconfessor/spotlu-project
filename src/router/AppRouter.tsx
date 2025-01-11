import LoginAuthorization from '@/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '@/pages/home';
import { useEffect } from 'react';
import { currentToken } from '@/constants/config';

const AppRouter = () => {
  const navigate = useNavigate()
  const isToken = Boolean(currentToken.access_token)
  
  useEffect(() => {
    if (isToken) {
      navigate('/home');
    }
    if (!isToken) {
      navigate('/login');
    }
  }, [isToken, navigate])

  return (
      <Routes>
        <Route path="/login" element={<LoginAuthorization/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  );
};

export default AppRouter;