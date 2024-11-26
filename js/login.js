const formulario = document.querySelector('#login-form'); // Selector del formulario
const nombreDeUsuario = "lucas";
const LaContraseña = "123456";

formulario.onsubmit = function loginUsuario(evento) {
    evento.preventDefault(); // Evita el envío del formulario por defecto

    const Usuario = document.querySelector('#usuario').value.trim(); // Valor del campo usuario
    const Contraseña = document.querySelector('#contrasena').value.trim(); // Valor del campo contraseña
    const mensajeError = document.querySelector('#mensaje-error'); // Contenedor del mensaje de error

    // Limpia el mensaje de error previo
    mensajeError.textContent = "";
    mensajeError.style.display = "none"; // Oculta el mensaje

    // Validación de campos vacíos
    if (!Usuario || !Contraseña) {
        mensajeError.textContent = "Por favor, completa todos los campos.";
        mensajeError.style.display = "block"; // Muestra el mensaje de error
        return;
    }

    // Validación de usuario y contraseña
    if (nombreDeUsuario === Usuario && LaContraseña === Contraseña) {
        alert("Bienvenido");
        window.location.href = "cargaDeProductos.html"; // Redirige a otra página (ajusta la ruta)
    } else {
        mensajeError.textContent = "Usuario y/o contraseña incorrectos.";
        mensajeError.style.display = "block"; // Muestra el mensaje de error
    }
};
