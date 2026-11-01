# 🖤 ECCOMODA — Landing Page de Lencería Exclusiva & Conversión VIP

Sistema web interactivo y responsivo para la vitrina digital de la marca **ECCOMODA**, diseñado bajo el estándar **IEEE 830** y los lineamientos del programa **ADSO (Análisis y Desarrollo de Software - SENA)**. Aplicación de alto rendimiento orientada a la conversión de tráfico frío mediante la presentación de beneficios clave, exhibición de productos destacados, animaciones fluidas (AOS) y canalización directa a ventas por WhatsApp.

---

## 📋 Tabla de Contenidos
1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Arquitectura del Sistema](#-arquitectura-del-sistema)
3. [Especificación de Requerimientos (IEEE 830 / SENA)](#-especificación-de-requerimientos-ieee-830--sena)
4. [Nuevas Características Integradas](#-nuevas-características-integradas)
5. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
6. [Estructura de Directorios](#-estructura-de-directorios)
7. [Instalación y Despliegue Local](#-instalación-y-despliegue-local)
8. [Despliegue a Producción](#-despliegue-a-producción)

---

## 💎 Descripción del Proyecto

ECCOMODA es una tienda virtual de lencería de lujo en auge. Este proyecto corresponde a su **página de aterrizaje (Landing Page)** optimizada para:
- **Calentar clientes en frío:** Transmitir elegancia, discreción y prestigio desde el primer impacto visual con un Hero cinematográfico.
- **Exhibir la propuesta de valor:** Presentar beneficios diferenciales con efectos 3D (Telas Suaves, Costuras Invisibles, Lujo & Discreción).
- **Incentivar la compra:** Filtrar y visualizar prendas dinámicamente con insignias de promoción VIP.
- **Convertir a ventas:** Canalizar el tráfico interesado mediante un Call to Action (CTA) dinámico y un botón flotante Sticky hacia WhatsApp.

---

## 🏛️ Arquitectura del Sistema

El proyecto sigue una **Arquitectura Modular Frontend limpia** basada en el estándar **ES6 Modules**, garantizando una estricta separación de responsabilidades:

```text
  [ index.html ]  <--->  [ main.js ] (Orquestador / Entry Point)
                             |
         +-------------------+-------------------+
         |                   |                   |
  [ apiHandler.js ]   [ filterLogic.js ]   [ renderUI.js ]
         |                   |                   |
   (Fetch Data)       (Filtros Categoría)  (Manipula DOM & AOS)
         |                                       |
   [ data.json ]                           [ HTML / CSS ]
```

---

## 🌟 Nuevas Características Integradas

1. **Estructura One-Page Fluida:** Transiciones suaves basadas en la librería de animaciones **AOS (Animate On Scroll)** con sincronización dinámica post-render.
2. **Vídeo Hero Cinemático:** Vídeo en bucle optimizado con atributos `autoplay muted loop playsinline poster="..."` y capa overlay radial para máxima legibilidad.
3. **Botón de WhatsApp Flotante (Sticky):** CTA omnipresente en la esquina inferior derecha con efectos hover y enlace dinámico.
4. **Identidad Visual de Lujo:** Paleta basada en Negro Azabache (`#0B0B0B`), Dorado Metálico (`#D4AF37`), tipografías *Playfair Display* & *Montserrat*, y tarjetas con efectos 3D.

---

## 📂 Estructura de Directorios

```text
📁 ECOMODA
 ├── 📁 assets
 │    ├── 📁 lenceria
 │    │    ├── 📄 lenazul.jpg
 │    │    ├── 📄 lenverde.jpg
 │    │    └── 📄 lenmorado.jpg
 │    ├── 📁 modelo
 │    │    ├── 📄 mrojo.jpg
 │    │    ├── 📄 mnegro.jpg
 │    │    └── 📄 mverde.jpg
 │    ├── 📁 videos
 │    │    ├── 📄 mujervi.mp4
 │    │    └── 📄 mujervi2.mp4
 │    └── 📄 logo.png
 ├── 📁 css
 │    └── 📄 styles.css
 ├── 📁 js
 │    ├── 📁 data
 │    │    └── 📄 data.json
 │    ├── 📁 modules
 │    │    ├── 📄 apiHandler.js     [Completado]
 │    │    ├── 📄 filterLogic.js    [Completado]
 │    │    └── 📄 renderUI.js       [Completado]
 │    └── 📄 main.js
 ├── 📄 README.md
 └── 📄 index.html
```

---

## 🚀 Instalación y Despliegue Local

Debido a que el proyecto utiliza **ES6 Modules** y la función `fetch()` para cargar `data.json`, los navegadores modernos restringen estas peticiones si se abre el archivo directamente con doble clic (`file:///...`) por políticas de seguridad **CORS**.

### Opción 1: VS Code Live Server (Recomendado)
1. Abre la carpeta `ECOMODA` en Visual Studio Code.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

### Opción 2: Python HTTP Server
```bash
# Dentro del directorio ECOMODA
python -m http.server 8000
# Abrir en navegador: http://localhost:8000
```

### Opción 3: Node.js / npx serve
```bash
npx serve .
```

---

## 🌐 Despliegue a Producción

Para desplegar en plataformas gratuitas de alto rendimiento:
- **GitHub Pages:** Sube el repositorio a GitHub y activa Pages en la rama `main` (directorio `/root`).
- **Vercel / Netlify:** Arrastra la carpeta o conecta el repositorio de GitHub; detectará automáticamente el archivo estático `index.html`.
