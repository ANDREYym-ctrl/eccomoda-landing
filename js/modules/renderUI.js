/**
 * ECCOMODA - Módulo para la manipulación y renderizado del DOM (RNF-01)
 * Arquitectura Clean Code con ES6 Modules
 * Clean Luxury UI | Estándar IEEE 830 / SENA
 */

export function renderBenefits(benefits) {
    const container = document.getElementById('benefits-container');
    if (!container) return;

    container.innerHTML = benefits.map((b, index) => `
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 150}">
            <div class="benefit-3d-card text-center h-100 d-flex flex-column align-items-center">
                <img src="${b.image}" alt="${b.title}" class="benefit-circle-img">
                <h3 class="h5 fw-bold text-dark mb-2 font-serif">${b.title}</h3>
                <p class="text-secondary small mb-0 lh-base">${b.description}</p>
            </div>
        </div>
    `).join('');
}

export function renderPromotions(promotions, whatsappNumber) {
    const container = document.getElementById('promotions-container');
    if (!container || !promotions) return;

    const cleanNumber = whatsappNumber ? String(whatsappNumber).replace(/[^0-9]/g, '') : '';

    container.innerHTML = promotions.map((p, index) => {
        const msg = encodeURIComponent(`¡Hola ECCOMODA! Me interesa aprovechar la promoción: ${p.offer}`);
        const url = `https://wa.me/${cleanNumber}?text=${msg}`;
        return `
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 150}">
                <div class="promo-card h-100 d-flex flex-column text-center p-4">
                    <span class="promo-tag mx-auto mb-3">${p.tag}</span>
                    <h3 class="h4 fw-bold text-dark mb-2 font-serif">${p.offer}</h3>
                    <p class="text-secondary small mb-4 flex-grow-1">${p.description}</p>
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-gold rounded-pill py-2 px-4 text-uppercase">
                        Aprovechar Promo
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

export function renderProducts(products, whatsappNumber) {
    const container = document.getElementById('products-container');
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = `<p class="text-center text-muted py-4">No se encontraron prendas en esta categoría.</p>`;
        return;
    }

    const cleanNumber = whatsappNumber ? String(whatsappNumber).replace(/[^0-9]/g, '') : '';

    container.innerHTML = products.map((p, index) => {
        const msg = encodeURIComponent(`¡Hola ECCOMODA! Me interesa: ${p.name} (${p.price}). Deseo consultar tallas y disponibilidad.`);
        const url = `https://wa.me/${cleanNumber}?text=${msg}`;
        return `
            <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="${(index % 3) * 150}">
                <div class="luxury-card h-100 d-flex flex-column">
                    <div class="position-relative overflow-hidden">
                        <img src="${p.image}" class="card-img-top object-fit-cover" alt="${p.name}" style="height: 340px;">
                        ${p.promo ? `<span class="badge badge-gold position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">${p.promo}</span>` : ''}
                        ${p.featured ? `<span class="badge badge-featured position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">Destacado</span>` : ''}
                    </div>
                    <div class="card-body d-flex flex-column p-4 text-start">
                        <span class="text-uppercase tracking-widest text-gold fw-bold small d-block mb-1">${p.category}</span>
                        <h3 class="h5 fw-bold text-dark mb-1 font-serif">${p.name}</h3>
                        <p class="product-price fw-bold mb-2">${p.price}</p>
                        ${p.description ? `<p class="text-secondary small mb-3">${p.description}</p>` : ''}
                        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold mt-auto rounded-pill py-2 w-100 text-center">
                            Consultar en WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-sincronizar AOS tras inyección dinámica en el DOM
    if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
    }
}

export function renderWhatsAppCTA(whatsappNumber, social) {
    const container = document.getElementById('whatsapp-cta-container');
    const floatContainer = document.getElementById('whatsapp-float');
    const socialContainer = document.getElementById('social-links-container');
    
    const cleanNumber = whatsappNumber ? String(whatsappNumber).replace(/[^0-9]/g, '') : '';
    const message = encodeURIComponent("¡Hola ECCOMODA! Me interesa su colección Clean Luxury de lencería y mallas. Deseo asesoría personalizada.");
    const url = `https://wa.me/${cleanNumber}?text=${message}`;

    // Botón principal de la sección de contacto
    if (container) {
        container.innerHTML = `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-lg px-5 py-3 rounded-pill text-uppercase shadow-sm">
                💬 Hablar con una Asesora (+57 312 414 3195)
            </a>
        `;
    }

    // Botón flotante permanente (Sticky)
    if (floatContainer) {
        floatContainer.innerHTML = `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-sticky" aria-label="Escríbenos por WhatsApp">
                <span style="font-size: 1.25rem;">💬</span> <span>Escríbenos</span>
            </a>
        `;
    }

    // Enlaces oficiales de redes sociales
    if (socialContainer && social) {
        socialContainer.innerHTML = `
            <div class="d-flex justify-content-center align-items-center flex-wrap gap-2 mt-4">
                <a href="${social.instagram || '#'}" target="_blank" rel="noopener noreferrer" class="social-pill text-decoration-none">
                    <span>📷 Instagram ${social.handle || '@ECCOMODA'}</span>
                </a>
                <a href="${social.tiktok || '#'}" target="_blank" rel="noopener noreferrer" class="social-pill text-decoration-none">
                    <span>🎵 TikTok ${social.handle || '@ECCOMODA'}</span>
                </a>
                <a href="${social.facebook || '#'}" target="_blank" rel="noopener noreferrer" class="social-pill text-decoration-none">
                    <span>📘 Facebook ${social.handle || '@ECCOMODA'}</span>
                </a>
            </div>
        `;
    }
}

export function renderErrorMessage(message) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="container my-5 text-center">
                <div class="alert alert-light border border-warning text-dark py-4 shadow-sm rounded-4" role="alert">
                    <h4 class="alert-heading fw-bold text-dark font-serif">¡Ups! Ocurrió un inconveniente</h4>
                    <p class="text-secondary mb-0">${message}</p>
                </div>
            </div>
        `;
    }
}
