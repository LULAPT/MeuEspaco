
// script.js
const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the percentage of mouse position relative to the window size
    const xPercentage = (mouseX / window.innerWidth) * 50;
    const yPercentage = (mouseY / window.innerHeight) * 50;

    // Update the background position
    background.style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xPercentage = (mouseX / window.innerWidth) * 110;
    const yPercentage = (mouseY / window.innerHeight) * 110;

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
        src: src="/media/yume.mp3",
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
    if (audio.paused) {
        audio.play();
    }
});



                

        
