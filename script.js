document.getElementById('color-filter').addEventListener('change', function() {
    const filterClass = this.value;

    const images = document.querySelectorAll('.filter-image'); // Seleciona todas as imagens com a classe 'filter-image'

    images.forEach(img => {
        img.className = 'filter-image'; // Reset da classe

        if (filterClass !== 'default') {
            img.classList.add(filterClass); // Adiciona a classe selecionada à imagem
        }
    });

    const daltonismImage = document.querySelector('.daltonism-image'); // Seleciona a imagem com a classe 'daltonism-image'

    daltonismImage.className = 'daltonism-image'; // Reset da classe

    if (filterClass !== 'default') {
        daltonismImage.classList.add(filterClass); // Adiciona a classe selecionada à imagem
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const colorFilter = document.getElementById('color-filter');
    const animationBox = document.querySelector('.animation-box');

    colorFilter.addEventListener('change', function() {
        if (colorFilter.value === 'default') {
            // Aplicar animação quando selecionado "Cores padrão"
            animationBox.classList.add('animate-colors');
            setTimeout(function() {
                animationBox.classList.remove('animate-colors');
            }, 3000); // Tempo da animação em milissegundos
        }
    });
});
