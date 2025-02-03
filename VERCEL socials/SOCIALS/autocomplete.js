feather.replace();

const input = document.querySelector("input");

input.addEventListener("input", () => {
  const rxSpaces = /\s+/g;
  const rxDashes = /-+/g;
  const rxDashStart = /^-/;

  input.value = input.value
    .replace(rxSpaces, "-")
    .replace(rxDashes, "-")
    .replace(rxDashStart, "");
});

// script.js
const searchbar = document.getElementById('searchbar');
const suggestions = document.getElementById('suggestions');

// Lista de sugestões (pode ser substituída por uma busca em um banco de dados ou API)
const data = [
    "Dharlan",
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
