import React from 'react';
import Logo from '../../assets/logo/Logo.jpg'; 
import './Header.css';

const Header = () => {
  const userName = localStorage.getItem('userName') || 'visitante';
  return (
    <header className="header">
      <div className="header-content">
        <img src={Logo} alt="Logo" className="header-logo" /> 
        <div className="header-welcome">
          <h1>Bem vindo,</h1>
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;