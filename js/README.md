# 🖤 ECCOMODA — Landing Page de Lencería Exclusiva & Conversión VIP

Sistema web interactivo y responsivo para la vitrina digital de la marca **ECCOMODA**, diseñado bajo el estándar **IEEE 830**. Aplicación de alto rendimiento orientada a la conversión de tráfico frío mediante la presentación de beneficios clave, exhibición de productos destacados y canalización directa a ventas por WhatsApp.

---

## 📋 Tabla de Contenidos
1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Arquitectura del Sistema](#-arquitectura-del-sistema)
3. [Especificación de Requerimientos (IEEE 830 / SENA)](#-especificación-de-requerimientos-ieee-830--sena)
4. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
5. [Estructura de Directorios](#-estructura-de-directorios)
6. [Instalación y Despliegue Local](#-instalación-y-despliegue-local)
7. [Estrategia de Control de Versiones](#-estrategia-de-control-de-versiones)

---

## 💎 Descripción del Proyecto

ECCOMODA es una tienda virtual de lencería de lujo en auge. Este proyecto corresponde a su **página de aterrizaje (Landing Page)** optimizada para:
- **Calentar clientes en frío:** Transmitir elegancia, discreción y prestigio desde el primer impacto visual.
- **Exhibir la propuesta de valor:** Presentar 3 beneficios diferenciales (Ajuste Imperial, Materiales Premium, Empaque 100% Discreto).
- **Incentivar la compra:** Filtrar y visualizar prendas destacadas con insignias de promoción VIP.
- **Convertir a ventas:** Canalizar el tráfico interesado mediante un Call to Action (CTA) dinámico que genera mensajes preconfigurados hacia WhatsApp.

---

## 🏛️ Arquitectura del Sistema

El proyecto sigue una **Arquitectura Modular Frontend limpia** basada en el estándar **ES6 Modules**, garantizando una clara separación de responsabilidades:

```text
  [ index.html ]  <--->  [ main.js ] (Punto de entrada)
                            |
         +------------------+------------------+
         |                  |                  |
  [ apiHandler.js ]  [ filterLogic.js ]  [ renderUI.js ]
         |                                     |
    (Fetch Data)                        (Manipula DOM)
         |                                     |
   [ data.json ]                        [ HTML / CSS ]