import { Routes, Route } from 'react-router-dom';

import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import LoginPage from '../pages/LoginPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
    </Routes>
  )
}

export default Router;
