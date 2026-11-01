/**
 * ECCOMODA - Módulo para la manipulación y renderizado del DOM (RNF-01)
 * Arquitectura Clean Code con ES6 Modules
 * Estándar IEEE 830 / SENA
 */

export function renderBenefits(benefits) {
    const container = document.getElementById('benefits-container');
    if (!container) return;

    container.innerHTML = benefits.map((b, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 150}">
            <div class="benefit-3d-card text-center h-100 d-flex flex-column align-items-center">
                <img src="${b.image}" alt="${b.title}" class="benefit-circle-img">
                <h3 class="h5 fw-bold text-gold mb-2">${b.title}</h3>
                <p class="text-muted small mb-0">${b.description}</p>
            </div>
        </div>
    `).join('');
}

export function renderProducts(products) {
    const container = document.getElementById('products-container');
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = `<p class="text-center text-muted py-4">No se encontraron prendas en esta categoría.</p>`;
        return;
    }

    container.innerHTML = products.map((p, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 200}">
            <div class="luxury-card h-100 d-flex flex-column">
                <div class="position-relative">
                    <img src="${p.image}" class="card-img-top object-fit-cover" alt="${p.name}" style="height: 340px;">
                    <span class="badge badge-gold position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">${p.promo}</span>
                </div>
                <div class="card-body d-flex flex-column p-4">
                    <h3 class="h5 fw-bold text-light mb-1">${p.name}</h3>
                    <p class="text-gold fw-bold fs-5 mb-3">${p.price}</p>
                    <a href="#contacto" class="btn btn-outline-gold mt-auto rounded-pill py-2">Consultar en WhatsApp</a>
                </div>
            </div>
        </div>
    `).join('');

    // Re-sincronizar AOS tras inyección dinámica en el DOM
    if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
    }
}

export function renderWhatsAppCTA(whatsappNumber) {
    const container = document.getElementById('whatsapp-cta-container');
    const floatContainer = document.getElementById('whatsapp-float');
    
    const cleanNumber = whatsappNumber ? String(whatsappNumber).replace(/[^0-9]/g, '') : '';
    const message = encodeURIComponent("¡Hola ECCOMODA! Me interesa la colección de lencería de lujo y deseo consultar las promociones VIP.");
    const url = `https://wa.me/${cleanNumber}?text=${message}`;

    // Botón principal de la sección de contacto
    if (container) {
        container.innerHTML = `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-lg px-5 py-3 rounded-pill text-uppercase shadow-lg">
                💬 Contactar Asesora por WhatsApp
            </a>
        `;
    }

    // Botón flotante permanente (Sticky)
    if (floatContainer) {
        floatContainer.innerHTML = `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-sticky shadow-lg" aria-label="Escríbenos por WhatsApp">
                <span style="font-size: 1.3rem;">💬</span> <span>Escríbenos</span>
            </a>
        `;
    }
}

export function renderErrorMessage(message) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="container my-5 text-center">
                <div class="alert alert-dark border-warning text-gold py-4" role="alert">
                    <h4 class="alert-heading fw-bold">¡Ups! Ocurrió un inconveniente</h4>
                    <p class="text-light">${message}</p>
                </div>
            </div>
        `;
    }
}
