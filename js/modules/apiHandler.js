export async function fetchProjectData() {
    try {
        const response = await fetch('./js/data/data.json');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consumir el dataset JSON:", error);
        throw error;
    }
}