/**
 * ECCOMODA - Main Entrance File
 * Arquitectura Clean Code con ES6 Modules
 * Estándar IEEE 830 / SENA
 */

import { fetchProjectData } from './modules/apiHandler.js';
import { 
    renderBenefits, 
    renderProducts, 
    renderWhatsAppCTA, 
    renderErrorMessage 
} from './modules/renderUI.js';
import { initFilters } from './modules/filterLogic.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log("🚀 Inicializando ECCOMODA Luxury System...");

        // 1. Carga asíncrona de datos desde el JSON (RF-01 / RNF-02)
        const data = await fetchProjectData();

        if (!data || !data.benefits || !data.products) {
            throw new Error("El formato del dataset recibido no es válido.");
        }

        // 2. Renderizado dinámico de la interfaz gráfica (UI)
        renderBenefits(data.benefits);         // Sección de calentamiento (RF-02)
        renderProducts(data.products);         // Muestra inicial de prendas (RF-03)
        renderWhatsAppCTA(data.whatsappNumber); // Botón de conversión VIP a WhatsApp (RF-04)

        // 3. Inicialización de la lógica de filtros dinámicos (RF-02 / RF-03)
        initFilters(data.products);

        console.log("✨ Sistema cargado y renderizado con éxito.");

    } catch (error) {
        console.error("❌ Fallo en la inicialización de la aplicación:", error);
        
        // Manejo y retroalimentación visual al usuario en caso de error (RNF-02)
        renderErrorMessage(
            "Ocurrió un error al cargar las prendas exclusivas. Revisa tu conexión o intenta nuevamente más tarde."
        );
    }
});