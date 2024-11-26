document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
    const menuMovil = document.querySelector('.menu-movil');
    menuMovil.style.display = menuMovil.style.display === 'none' || menuMovil.style.display === '' ? 'flex' : 'none';
});
