// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // EFECTO DE BRILLO GLOBAL Y EN TARJETAS
    // ==========================================
    // Escuchamos el movimiento del mouse en toda la página
    document.addEventListener('mousemove', (e) => {
        // Obtenemos la posición global del mouse
        const x = e.clientX;
        const y = e.clientY;

        // Actualizamos las variables CSS en el elemento raíz (html)
        // Esto permite que tanto el fondo del body como las tarjetas usen estas coordenadas
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });

    // ==========================================
    // NAVBAR CAMBIA DE COLOR AL HACER SCROLL
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});