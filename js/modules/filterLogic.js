import { renderProducts } from './renderUI.js';

export function initFilters(allProducts, whatsappNumber) {
    const filtersContainer = document.getElementById('filters-container');
    if (!filtersContainer) return;

    const categories = ['all', ...new Set(allProducts.map(p => p.category))];

    filtersContainer.innerHTML = categories.map(cat => `
        <button class="btn btn-outline-gold text-capitalize rounded-pill px-4 ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
            ${cat === 'all' ? 'Todos' : cat}
        </button>
    `).join('');

    filtersContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('#filters-container button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderProducts(allProducts, whatsappNumber);
            } else {
                const filtered = allProducts.filter(p => p.category === filterValue);
                renderProducts(filtered, whatsappNumber);
            }
        }
    });
}
