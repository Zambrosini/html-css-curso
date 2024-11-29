// Seleciona o botão de menu e o menu em si
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe "active" no menu
});
