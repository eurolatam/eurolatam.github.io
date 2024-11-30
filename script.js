// Crear efecto de nieve
function createSnow() {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow');
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 100; i++) {
        const flake = document.createElement('div');
        flake.classList.add('flake');
        flake.style.left = `${Math.random() * 100}vw`;
        flake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Aleatorio entre 5s y 10s
        flake.style.animationDelay = `${Math.random() * 5}s`; // Aleatorio para que no caigan todos al mismo tiempo
        snowContainer.appendChild(flake);
    }
}

// Iniciar el efecto de nieve
createSnow();
