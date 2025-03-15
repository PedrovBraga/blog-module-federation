import React, { useState } from 'react';

const Logout = () => {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3011/auth/logout', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.removeItem('token');
        setMessage('You have been logged out.');
      } else {
        setMessage(data.message || 'Error during logout');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Logout</h2>
      <p>Você está desconectado do sistema!</p>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Logout;
