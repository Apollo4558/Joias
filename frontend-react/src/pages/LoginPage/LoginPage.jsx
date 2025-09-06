import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../../assets/logo/Logo.jpg';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      localStorage.setItem('userName', userName);
      navigate('/home');
    } else {
      alert('Por favor, digite seu nome.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Seção "BEM VINDO" com a logo */}
        <div className="welcome-section">
          <img src={logo} alt="Logo Joias e Semijoias" className="welcome-logo" />
          <h2 className="welcome-title">BEM VINDO</h2>
          <p className="welcome-text">Para acessar a loja, por favor, digite seu nome.</p>
        </div>

        {/* Separador */}
        <div className="toggle-button-container">
          <div className="separator"></div>
        </div>

        {/* Seção "FAÇA LOGIN" simplificada */}
        <div className="login-section">
          <h2 className="login-section-title">ACESSAR LOJA</h2>
          <form className="login-form" onSubmit={handleLogin} autoComplete='off'>
            <div className="input-group">
              <label htmlFor="name" className="login-label">
                NOME:
              </label>
              <input
                type="text"
                id="name"
                className="login-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <button type="submit" className="login-button">
              ACESSAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;