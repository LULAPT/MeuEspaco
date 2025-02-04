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

// script.js
const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the percentage of mouse position relative to the window size
    const xPercentage = (mouseX / window.innerWidth) * 100;
    const yPercentage = (mouseY / window.innerHeight) * 100;

    // Update the background position
    background.style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xPercentage = (mouseX / window.innerWidth) * 100;
    const yPercentage = (mouseY / window.innerHeight) * 100;

    document.getElementById('background-layer-1').style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;
    document.getElementById('background-layer-2').style.backgroundPosition = `${xPercentage * 0.8}% ${yPercentage * 0.8}%`; // Slower movement for parallax
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [
            ":wave:",
        ],
        typeSpeed: 400, // Velocidade da digitação (em milissegundos)
        backSpeed: 200, // Velocidade para apagar (em milissegundos)
        backDelay: 1000, // Tempo de espera antes de apagar (em milissegundos)
        startDelay: 500, // Tempo de espera antes de começar (em milissegundos)
        loop: true, // Repetir a animação infinitamente
        showCursor: true, // Mostrar cursor piscando
        cursorChar: "|", // Caractere do cursor
    };

    // Inicializa o Typed.js
    const typed = new Typed('#wave', options);
});

        // Elementos do DOM
        const audio = document.getElementById('audio');
        const playPauseIcon = document.getElementById('playPauseIcon');
        const volumeSlider = document.getElementById('volumeSlider');

        // Função para alternar entre play e pause
        playPauseIcon.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            } else {
                audio.pause();
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
            }
        });

        // Função para ajustar o volume
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });

                // Define o volume inicial para 30%
                audio.volume = 0.1;

                

        
