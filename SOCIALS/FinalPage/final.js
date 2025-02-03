// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [
            "dps termino",
            "fezes",
            "ai que fome",
            "🚛🚛🚛"
        ],
        typeSpeed: 50, // Velocidade da digitação (em milissegundos)
        backSpeed: 30, // Velocidade para apagar (em milissegundos)
        backDelay: 1000, // Tempo de espera antes de apagar (em milissegundos)
        startDelay: 500, // Tempo de espera antes de começar (em milissegundos)
        loop: true, // Repetir a animação infinitamente
        showCursor: true, // Mostrar cursor piscando
        cursorChar: "|", // Caractere do cursor
    };

    // Inicializa o Typed.js
    const typed = new Typed('#typed-text', options);
});
