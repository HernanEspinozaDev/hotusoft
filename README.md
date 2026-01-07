# HotuSoft | Agencia de Software & Transformación Digital

![HotuSoft Logo](/public/images/logo.webp)

**Hotu Software Solutions SpA** es una consultora tecnológica con base en Las Condes, Santiago, dedicada a transformar negocios mediante infraestructura digital de nivel empresarial, pero accesible para Pymes y Startups.

Nuestra filosofía es **"Infosys para Pymes"**: Ofrecemos la robustez, seguridad y escalabilidad de las grandes corporaciones, entregada con la agilidad y eficiencia que tu negocio necesita.

---

## 🚀 Stack Tecnológico y Arquitectura

Este proyecto está construido bajo una arquitectura **Serverless** y **Static-First**, garantizando tiempos de carga instantáneos (Core Web Vitals 100/100), seguridad blindada y costos de mantenimiento mínimos.

### Frontend
- **[Astro](https://astro.build/):** Framework web moderno para sitios orientados a contenido. Generación estática (SSG) con hidratación parcial para máxima velocidad.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidad para un diseño visual totalmente personalizado, responsivo y mantenible.
- **TypeScript:** Tipado estático para un código robusto y libre de errores en tiempo de ejecución.

### Infraestructura (Cloud & Backend)
- **AWS (Amazon Web Services):**
    - **S3 + CloudFront:** Hosting global de alta velocidad y baja latencia.
    - **Lambda (Serverless):** Ejecución de lógica de negocio solo cuando es necesario (pago por uso).
- **Python (RPA):** Scripts de automatización para tareas repetitivas y procesos de negocio.

---

## 🛠️ Características del Sitio Web

1.  **Navegación Inteligente:**
    - Barra de navegación (`ScrollSpy`) lateral en Desktop para una experiencia de usuario fluida (Homepage).
    - Menús desplegables y optimización móvil completa.

2.  **Formularios Dinámicos:**
    - Sistema de "pre-selección de servicios": Los botones de *Call to Action* en las páginas de servicios informan al formulario de contacto sobre la intención del usuario, mejorando la tasa de conversión.

3.  **Diseño UI/UX Premium:**
    - Estética corporativa limpia y moderna ("Dark Mode" accents).
    - Uso de tipografía `Inter` para legibilidad óptima.
    - Componentes interactivos con micro-animaciones sutiles.

4.  **Optimización SEO:**
    - Meta-etiquetas dinámicas, Open Graph y Twitter Cards configuradas por página.
    - Estructura semántica HTML5 adecuada.

---

## 📂 Estructura del Proyecto

```bash
/
├── public/             # Archivos estáticos (imágenes, favicon, robots.txt)
├── src/
│   ├── components/     # Componentes UI reutilizables (React/Astro)
│   │   ├── layout/     # Footer, Navbar
│   │   ├── sections/   # Secciones de página (Hero, Pricing, Contact, etc.)
│   │   └── ui/         # Botones, ScrollSpy, etc.
│   ├── layouts/        # Plantilla base HTML (Global.css, Meta tags)
│   ├── pages/          # Rutas del sitio
│   │   ├── servicios/  # Páginas de aterrizaje de servicios específicos
│   │   └── index.astro # Homepage
│   └── styles/         # CSS Global y configuraciones Tailwind
└── astro.config.mjs    # Configuración del framework
```

---

## 📦 Instalación y Desarrollo Local

Para ejecutar este proyecto localmente, asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/hotusoft/website.git
    cd hotusoft-website
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

---

## 📄 Información Legal

*   **Razón Social:** HOTU SOFTWARE SOLUTIONS SPA
*   **RUT:** 78065779-0
*   **Oficina Virtual:** Apoquindo 6410, Of 1004, Ps 10, Las Condes, Santiago, Chile.
*   **Contacto:** [contacto@hotusoft.com](mailto:contacto@hotusoft.com)

---

© 2024 Hotu Software Solutions SpA. Todos los derechos reservados.
