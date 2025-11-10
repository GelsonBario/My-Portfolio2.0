// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DO MENU MOBILE (que já estava aqui) ---
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');

    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('#menu-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuLinks.classList.contains('show')) {
                menuLinks.classList.remove('show');
            }
        });
    });
    // --- FIM DO CÓDIGO DO MENU MOBILE ---


    // ▼▼ NOVO CÓDIGO: EFEITO DE DIGITAÇÃO ▼▼
    // Define as opções para o Typed.js
    const options = {
        strings: [
            "Desenvolvedor Web",
            "Entusiasta de Front-End",
            "Apaixonado por JavaScript",
            "Criador de Soluções"
        ],
        typeSpeed: 50,  // Velocidade de digitação (em milissegundos)
        backSpeed: 30,  // Velocidade de "backspace"
        backDelay: 1500, // Tempo de espera antes de apagar
        startDelay: 500, // Tempo de espera antes de começar
        loop: true,     // Repetir a animação
        showCursor: true, // Mostrar o cursor piscando
        cursorChar: "|"
    };

    // Inicializa o Typed.js no elemento com ID 'typed-text'
    const typed = new Typed('#typed-text', options);
    // ▲▲ FIM DO NOVO CÓDIGO ▲▲

});