/**
 * ECCOMODA - Main Entrance File
 * Arquitectura Clean Code con ES6 Modules
 * Clean Luxury UI | Estándar IEEE 830 / SENA
 */

import { fetchProjectData } from './modules/apiHandler.js';
import { 
    renderBenefits, 
    renderPromotions,
    renderProducts, 
    renderWhatsAppCTA, 
    renderErrorMessage 
} from './modules/renderUI.js';
import { initFilters } from './modules/filterLogic.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log("🚀 Inicializando ECCOMODA Clean Luxury System...");

        // 1. Carga asíncrona de datos desde el JSON (RF-01 / RNF-02)
        const data = await fetchProjectData();

        if (!data || !data.benefits || !data.products) {
            throw new Error("El formato del dataset recibido no es válido.");
        }

        // 2. Renderizado de Beneficios (RF-02)
        renderBenefits(data.benefits);

        // 3. Renderizado de Promociones de Temporada (Promo 1, 2, 3)
        if (data.promotions) {
            renderPromotions(data.promotions, data.whatsappNumber);
        }

        // 4. Renderizado de Catálogo de Productos (Classic, Premium, Elite) (RF-03)
        renderProducts(data.products, data.whatsappNumber);

        // 5. Configuración de WhatsApp y Redes Sociales @ECCOMODA (RF-04)
        renderWhatsAppCTA(data.whatsappNumber, data.social);

        // 6. Inicialización de Filtros Dinámicos (RF-02 / RF-03)
        initFilters(data.products, data.whatsappNumber);

        console.log("✨ Sistema ECCOMODA cargado y renderizado con éxito.");

    } catch (error) {
        console.error("❌ Fallo en la inicialización de la aplicación:", error);
        
        // Manejo y retroalimentación visual al usuario en caso de error (RNF-02)
        renderErrorMessage(
            "Ocurrió un error al cargar las prendas exclusivas. Revisa tu conexión o intenta nuevamente más tarde."
        );
    }
});
