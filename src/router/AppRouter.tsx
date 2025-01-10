import Authorization from '@/auth';
import { currentToken } from '@/constants/config';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home';

const AppRouter = () => {

  if(currentToken.access_token) {
    return <Navigate to="/home" />
  }
  return (
    <Router>
      <Route path="/" element={<Authorization/>} />
      <Route path={"./home"} element={<Home />} />
    </Router>
  );
};

export default AppRouter;