var formulario = document.getElementById('formulario');

// Agrega un evento al formulario
formulario.addEventListener('submit', function(event) {
    // Previene el comportamiento predeterminado del formulario (enviar la página)
    event.preventDefault();

    // Muestra una alerta
    alert('Solicitud enviada correctamente. Pronto nos pondremos en contacto con usted.');
});