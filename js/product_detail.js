// product_detail.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener ID de la URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const container = document.getElementById("product-detail-container");
    const errorState = document.getElementById("error-state");

    if (!productId || !window.products) {
        errorState.style.display = "block";
        return;
    }

    // 2. Buscar producto
    const product = window.products.find(p => p.id === productId);

    if (!product) {
        errorState.style.display = "block";
        return;
    }

    // 3. Renderizar Datos
    document.title = `${product.name} | Gasfiteria ATG`;

    // Textos
    document.getElementById("product-name").textContent = product.name;

    // Precio
    if (typeof product.priceFinal === 'number') {
        document.getElementById("product-price").textContent = "$" + product.priceFinal.toLocaleString("es-CL");
    } else {
        document.getElementById("product-price").textContent = product.priceFinal;
    }

    // Descripción
    document.getElementById("product-desc").innerHTML = product.description;

    // 4. Galería Imágenes
    const mainImg = document.getElementById("main-product-image");
    const thumbsContainer = document.getElementById("gallery-thumbs");

    // Imagen principal inicial
    if (product.images.length > 0) {
        mainImg.src = product.images[0];
    }

    // Generar Miniaturas
    product.images.forEach((imgSrc, index) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.className = `thumb-img shadow-sm ${index === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
            // Cambiar imagen principal
            mainImg.src = imgSrc;
            // Actualizar clase active
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbsContainer.appendChild(thumb);
    });

    // 5. Botón WhatsApp
    const whatsappBtn = document.getElementById("whatsapp-btn");

    let displayPriceMsg = typeof product.priceFinal === 'number'
        ? "$" + product.priceFinal.toLocaleString("es-CL")
        : product.priceFinal;

    const message = `Hola! Quiero comprar este producto:

Producto: ${product.name}
Precio final: ${displayPriceMsg}
Resumen: ${product.specsShort}

Aviso: Producto sin garantía (solo instalación/servicio según corresponda).`;

    const encodedMessage = encodeURIComponent(message);
    whatsappBtn.href = `https://api.whatsapp.com/send/?phone=56969163256&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Mostrar contenedor
    container.style.display = "flex";
});
