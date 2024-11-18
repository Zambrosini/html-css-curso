// Função para enviar o post
function submitPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent) {
        const postsContainer = document.getElementById('posts');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <p>${postContent}</p>
            <small>Postado agora</small>
        `;
        postsContainer.prepend(newPost);  // Adiciona o post no início
        document.getElementById('post-content').value = ''; // Limpa o campo de postagem
    } else {
        alert("Por favor, escreva algo antes de postar.");
    }
}

// Adicionando um exemplo de post para que apareça ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts');
    if (postsContainer) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <p>Exemplo de post na página inicial!</p>
            <small>Postado agora</small>
        `;
        postsContainer.appendChild(newPost); // Adiciona um post de exemplo
    }
});
