const nome = localStorage.getItem('nomeUsuario');
const nameElement = document.getElementById('name-sub')

nameElement.textContent = `${nome || 'Visitante'}!`;
nameElement.style.background = "#1A1A2E";
nameElement.style.webkitBackgroundClip = "text"; // Aplica degradê ao texto
nameElement.style.webkitTextFillColor = "transparent";
nameElement.style.fontWeight = "bold";
nameElement.style.fontSize = 36 + 'px';