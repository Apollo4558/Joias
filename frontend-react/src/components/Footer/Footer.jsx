import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Sobre</h3>
          <p>Somos uma empresa apaixonada por realçar a beleza e a elegância através de joias e semijoias cuidadosamente selecionadas. Nosso compromisso é oferecer peças que encantam, com qualidade, sofisticação e um toque especial de carinho em cada detalhe.</p>
        </div>
        <div className="footer-section contact">
          <h3>Contato</h3>
          <p>Email: vanessaborges1409@gmail.com</p>
          <p>Tel: (11) 98765-4321</p>
          <p>Brumado, BA</p>
        </div>
        <div className="footer-section social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100076820583398&_rdr" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook-icon" />
            </a>
            <a href="https://www.instagram.com/vanessaborges_joias.rommanel/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 VANESSA BORGES. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;