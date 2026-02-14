// products_list.js

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("products-dynamic-grid");

    if (!gridContainer) return;

    // Limpiar contenido previo (spinners o placeholders)
    gridContainer.innerHTML = "";

    window.products.forEach(product => {
        // Formatear precio
        let displayPrice;
        if (typeof product.priceFinal === 'number') {
            displayPrice = "$" + product.priceFinal.toLocaleString('es-CL');
        } else {
            displayPrice = product.priceFinal;
        }

        // Crear card HTML
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 d-flex align-items-stretch";

        col.innerHTML = `
            <div class="product-card w-100 bg-white rounded-4 shadow-sm overflow-hidden border d-flex flex-column" onclick="window.location.href='producto.html?id=${product.id}'" style="cursor: pointer;">
                <div class="product-img-container position-relative">
                    <img src="${product.images[0]}" alt="${product.name}" class="img-fluid product-img">
                    <div class="overlay-hover d-flex align-items-center justify-content-center">
                        <span class="btn btn-gold fw-bold rounded-pill px-4">VER DETALLE</span>
                    </div>
                </div>
                <div class="p-4 d-flex flex-column flex-grow-1">
                    <h5 class="fw-bold text-dark-blue mb-2">${product.name}</h5>
                    <h4 class="text-gold fw-bolder mb-3">${displayPrice}</h4>
                    <ul class="list-unstyled small text-muted mb-4 flex-grow-1">
                        ${product.specsShort.split(',').map(spec => `<li><i class="fas fa-check text-gold me-1"></i> ${spec.trim()}</li>`).join('')}
                    </ul>
                    <button class="btn btn-dark w-100 fw-bold hover-scale mt-auto">
                       VER DETALLES
                    </button>
                </div>
            </div>
        `;

        gridContainer.appendChild(col);
    });
});
