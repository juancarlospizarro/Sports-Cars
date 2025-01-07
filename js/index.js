var imagen = document.getElementById('imagen');

// Agrega un evento para escuchar cuando el cursor pasa sobre la imagen
imagen.addEventListener('mouseover', function() {
    // Cambia el tamaño de la imagen cuando el cursor está sobre ella
    imagen.style.transform = 'scale(1.1)';
});

// Agrega un evento para escuchar cuando el cursor sale de la imagen
imagen.addEventListener('mouseout', function() {
    // Restaura el tamaño original de la imagen cuando el cursor sale
    imagen.style.transform = 'scale(1)';
});


    