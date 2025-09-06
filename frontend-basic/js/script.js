const nome = localStorage.getItem('nomeUsuario');
const nameElement = document.getElementById('name-sub')

nameElement.textContent = `${nome || 'Visitante'}!`;
nameElement.style.background = "#1A1A2E";
nameElement.style.webkitBackgroundClip = "text"; // Aplica degradê ao texto
nameElement.style.webkitTextFillColor = "transparent";
nameElement.style.fontWeight = "bold";
nameElement.style.fontSize = 36 + 'px';

function filtrarCategoria(categoria) {
    const itens = document.querySelectorAll('.item');
  
    itens.forEach(item => {
      if (categoria === 'todas' || item.classList.contains(categoria)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Exibir todos os itens ao carregar a página
  window.onload = () => filtrarCategoria('todas');