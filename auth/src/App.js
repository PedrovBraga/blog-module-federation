import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import Logout from './components/Auth/Logout';

const App = ({isContainer = false}) => {

  const routes = (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );

  return !isContainer ? (
        <Router>{routes}</Router> // Renderiza o Router se não estiver no container
      ) : (
        routes // Apenas as rotas, sem o Router, se estiver no container
      )
};

export default App;
