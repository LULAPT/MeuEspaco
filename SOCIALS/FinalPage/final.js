const background = document.getElementById('background');
const backgroundLayer1 = document.getElementById('background-layer-1');
const backgroundLayer2 = document.getElementById('background-layer-2');

let mouseX = 0;
let mouseY = 0;
let ticking = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateBackgrounds();
            ticking = false;
        });
        ticking = true;
    }
});

function updateBackgrounds() {
    // Calculate the percentage of mouse position relative to the window size
    const xPercentage = (mouseX / window.innerWidth) * 50;
    const yPercentage = (mouseY / window.innerHeight) * 50;
    
    // Update the main background position
    background.style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;
    
    // Update the parallax layers
    const xLayer1 = (mouseX / window.innerWidth) * 110;
    const yLayer1 = (mouseY / window.innerHeight) * 110;
    
    backgroundLayer1.style.backgroundPosition = `${xLayer1}% ${yLayer1}%`;
    backgroundLayer2.style.backgroundPosition = `${xLayer1 * 0.8}% ${yLayer1 * 0.8}%`;
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [
            "Amp it up.",
            "Hate Machine.",
            "⚠️",
            "we are 4ever.",
            "Keep Distance.",
            "Never fear.",
            ":wave:",
        ],
        typeSpeed: 100, // Velocidade da digitação (em milissegundos)
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

document.getElementById('enterButton').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');

    // Adiciona a classe para esconder o overlay com animação
    overlay.classList.add('hidden');

    // Adiciona a classe para mostrar o conteúdo com animação
    setTimeout(() => {
        content.classList.add('visible');
    }, 50); // Delay para sincronizar com a transição do overlay
});

const songs = [
    {
        title: "The Blonde",
        artist: "Tv Girl",
        src: src="media\Yume 2kki.mp3",
        cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/4/c/1/888411709751393.jpg"
    },
];

// let currentSongIndex = 0;
// const audio = document.getElementById('audio');
// const title = document.getElementById('title');
// const artist = document.getElementById('artist');
// const cover = document.querySelector('.cover img');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// // Carrega a música atual
// function loadSong(song) {
//     title.textContent = song.title;
//     artist.textContent = song.artist;
//     audio.src = song.src;
//     cover.src = song.cover;
// }

// Inicia ou pausa a música
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '&#x23F8;'; // Ícone de pausa
    } else {
        audio.pause();
        playBtn.innerHTML = '&#x23F5;'; // Ícone de play
    }
}

// Avança para a próxima música
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playBtn.innerHTML = '&#x23F8;';
}

// Retrocede para a música anterior
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playBtn.innerHTML = '&#x23F8;';
}

// Atualiza a barra de progresso
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Define o progresso da música ao clicar na barra
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong); // Avança automaticamente para a próxima música

// Carrega a primeira música ao iniciar
loadSong(songs[currentSongIndex]);

// Inicia o autoplay quando a página carregar
window.addEventListener('load', startAutoplay);

// Permite que o áudio seja reproduzido após a interação do usuário
document.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
    }
});