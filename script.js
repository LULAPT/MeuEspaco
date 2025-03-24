function revealContent() {
    const lockscreen = document.getElementById('lockscreen');
    const mainContent = document.getElementById('mainContent');
    
    lockscreen.classList.add('hidden');
    mainContent.classList.add('revealed');
}

let isClickActive = false; // Flag para controlar se o efeito do clique está ativo

// Função para atualizar a posição do background com base nas coordenadas do mouse
function updateBackgroundPosition(mouseX, mouseY) {
    const xPercentage = (mouseX / window.innerWidth) * 100;
    const yPercentage = (mouseY / window.innerHeight) * 40;

    // Atualiza a posição do background-layer-1
    backgroundLayer1.style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;

    // Atualiza a posição do background-layer-2 com um efeito parallax (movimento mais lento)
    backgroundLayer2.style.backgroundPosition = `${xPercentage * 0.8}% ${yPercentage * 0.8}%`;
}

// Evento de movimento do mouse
document.addEventListener('mousemove', (e) => {
    if (!isClickActive) { // Só atualiza se o efeito do clique não estiver ativo
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Atualiza a posição do background com as coordenadas reais do mouse
        updateBackgroundPosition(mouseX, mouseY);
    }
});

// Evento de clique do mouse
document.addEventListener('click', (e) => {
    if (!isClickActive) { // Evita múltiplas ativações
        // Ativa a flag do efeito do clique
        isClickActive = true;

        // Simula a posição do mouse na parte inferior da tela
        const mouseX = window.innerWidth / 2; // Centraliza horizontalmente
        const mouseY = window.innerHeight;   // Coloca o mouse na parte inferior

        // Atualiza a posição do background como se o mouse estivesse lá em baixo
        updateBackgroundPosition(mouseX, mouseY);

        // Revela o conteúdo
        revealContent();

        // Desativa o efeito após 5 segundos (5000 milissegundos)
        setTimeout(() => {
            isClickActive = false;
        }, 5000); // Altere o valor para ajustar o tempo de desativação
    }
});

// script.js
const background = document.getElementById('background');

const backgroundLayer1 = document.getElementById('background-layer-1');
const backgroundLayer2 = document.getElementById('background-layer-2');

// Cria o elemento do cursor personalizado
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Atualiza a posição do cursor personalizado com base no movimento do mouse
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});



// script.js
const searchbar = document.getElementById('searchbar');
const suggestions = document.getElementById('suggestions');

// Lista de sugestões (pode ser substituída por uma busca em um banco de dados ou API)
const data = [
    "dharlan",
];

// Função para filtrar as sugestões
function filterSuggestions(input) {
    return data.filter(item => item.toLowerCase().includes(input.toLowerCase()));
}

// Função para exibir as sugestões
function showSuggestions(filteredData) {
    if (filteredData.length > 0) {
        suggestions.innerHTML = filteredData.map(item => `<li>${item}</li>`).join('');
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

// Evento de digitação na barra de pesquisa
searchbar.addEventListener('input', (e) => {
    const input = e.target.value;
    if (input) {
        const filteredData = filterSuggestions(input);
        showSuggestions(filteredData);
    } else {
        suggestions.style.display = 'none';
    }
});

// Evento de clique em uma sugestão
suggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchbar.value = e.target.textContent;
        suggestions.style.display = 'none';
    }
});

// Evento para fechar as sugestões ao clicar fora
document.addEventListener('click', (e) => {
    if (e.target !== searchbar) {
        suggestions.style.display = 'none';
    }
});

function showSuggestions(filteredData) {
    if (filteredData.length > 0) {
        suggestions.innerHTML = filteredData.map(item => `<li>${item}</li>`).join('');
        suggestions.style.display = 'block';
        setTimeout(() => {
            suggestions.classList.add('visible'); // Adiciona a classe para animação
        }, 10); // Pequeno delay para garantir que o display block seja aplicado
    } else {
        suggestions.classList.remove('visible'); // Remove a classe para ocultar
        setTimeout(() => {
            suggestions.style.display = 'none'; // Esconde após a animação
        }, 300); // Duração da animação
    }
}

suggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchbar.value = e.target.textContent;
        suggestions.classList.remove('visible'); // Remove a classe para animação de saída
        setTimeout(() => {
            suggestions.style.display = 'none'; // Esconde após a animação
        }, 500); // Duração da animação
    }
});

// Evento de clique em uma sugestão
suggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedItem = data.find(item => item.name === e.target.textContent);
        if (selectedItem) {
            window.location.href = selectedItem.page; // Redireciona para a página correspondente
        }
    }
});

// Evento de pressionar "Enter" na barra de pesquisa
searchbar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = searchbar.value.trim();
        if (input) {
            const selectedItem = data.find(item => item.name.toLowerCase() === input.toLowerCase());
            if (selectedItem) {
                window.location.href = selectedItem.page; // Redireciona para a página correspondente
            } else {
                alert('Nenhum resultado encontrado!'); // Exibe um alerta se não houver correspondência
            }
        }
    }
});

// Seleciona a caixa de texto pelo ID
const urlInput = document.getElementById('searchbar');

// Adiciona um ouvinte de evento para detectar a tecla pressionada
urlInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada foi o Enter (código da tecla 13)
  if (event.key === 'Enter') {
    // Obtém o valor digitado na caixa de texto
    const url = urlInput.value.trim();

    // Verifica se o valor da URL não está vazio
    if (url) {
      // Redireciona para a URL digitada
      window.location.href="https://meu-espaco.vercel.app/SOCIALS/FinalPage/finalscreen.html";
    } else {
      alert('Por favor, insira uma URL válida.');
    }
  }
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [
            "Olá!",
            "Experimente digitar o meu nome na barra ‘new-channel’ abaixo.",
            "Conseguiu? 🤡",
            "Não conseguiu ainda?",
            "Seu burro.",
            "...",
            ".",
            ".",
            ".",
        ],
        typeSpeed: 50, // Velocidade da digitação (em milissegundos)
        backSpeed: 30, // Velocidade para apagar (em milissegundos)
        backDelay: 1000, // Tempo de espera antes de apagar (em milissegundos)
        startDelay: 13500, // Tempo de espera antes de começar (em milissegundos)
        loop: true, // Repetir a animação infinitamente
        showCursor: true, // Mostrar cursor piscando
        cursorChar: "|", // Caractere do cursor
    };

    // Inicializa o Typed.js
    const typed = new Typed('#typed-text', options);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [
            "Olá!",
            "Clique em qualquer lugar para entrar no terminal.",
            "...",
        ],
        typeSpeed: 50, // Velocidade da digitação (em milissegundos)
        backSpeed: 100, // Velocidade para apagar (em milissegundos)
        backDelay: 1500, // Tempo de espera antes de apagar (em milissegundos)
        startDelay: 500, // Tempo de espera antes de começar (em milissegundos)
        loop: true, // Repetir a animação infinitamente
        showCursor: true, // Mostrar cursor piscando
        cursorChar: "|", // Caractere do cursor
    };

    // Inicializa o Typed.js
    const typed = new Typed('#typed-main', options);
});