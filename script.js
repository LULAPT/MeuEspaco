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
