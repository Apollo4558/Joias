import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (userName.trim()) {
      localStorage.setItem('userName', userName);
      navigate('/home');
    } else {
      alert('Por favor, digite seu nome.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="logo-text">JOIAS & SEMIJOIAS</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="name" className="login-label">
            NOME:
          </label>
          <input
            type="text"
            id="name"
            className="login-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" className="login-button">
            ACESSAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;