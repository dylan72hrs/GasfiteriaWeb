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

    // ==========================================
    // FORMULARIO WHATSAPP
    // ==========================================
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const motivo = document.getElementById('motivo').value;
            const correo = document.getElementById('correo').value.trim();
            const detalle = document.getElementById('detalle').value.trim();

            // Validaciones básicas (HTML5 required ya ayuda, pero por seguridad)
            if (!nombre || !telefono || !motivo) {
                alert('Por favor completa los campos obligatorios.');
                return;
            }

            // Construir mensaje
            let mensaje = `📩 *Nueva solicitud desde la web*%0A`;
            mensaje += `👤 *Nombre:* ${nombre}%0A`;
            mensaje += `📱 *Teléfono:* ${telefono}%0A`;

            if (correo) {
                mensaje += `✉️ *Correo:* ${correo}%0A`;
            }

            mensaje += `🛠️ *Motivo:* ${motivo}%0A`;

            if (detalle) {
                mensaje += `📝 *Detalle:* ${detalle}`;
            }

            // URL WhatsApp
            const url = `https://api.whatsapp.com/send/?phone=56969163256&text=${mensaje}&type=phone_number&app_absent=0`;

            // Abrir en nueva pestañas
            window.open(url, '_blank');
        });
    }
});
