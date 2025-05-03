function saveName() {
    const name = document.getElementById('name').value;
    localStorage.setItem('nomeUsuario', name);
    window.location.href = 'index.html'; 
}