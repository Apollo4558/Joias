import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import './App.css'; // O novo caminho para o arquivo de estilo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Você pode adicionar outras rotas aqui no futuro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;