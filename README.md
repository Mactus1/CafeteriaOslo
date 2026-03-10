# ☕ Cafetería Oslo

> _Hecho con mucho amor, paciencia y práctica._

Proyecto web para una cafetería ficticia desarrollado como práctica de HTML, CSS y JavaScript.
El objetivo es replicar el diseño dado en las especificaciones, con versión móvil y escritorio.

---

## 📁 Estructura del proyecto

```
CafeOslo/
├── 📄 index.html               → HTML principal (estructura de la web)
├── 🎨 style.css                → Estilos CSS (diseño y responsive)
├── ⚙️  cafeteria.js             → JavaScript (menú hamburguesa)
├── 🚫 .gitignore               → Archivos que Git no sube al repo
│
├── 🖼️  imagenes/
│   ├── Fondo1.jpg              → Imagen de fondo del hero
│   ├── Fondo2.jpg              → Imagen de fondo de "Ven a desayunar"
│   ├── Logo.png                → Logo Café Oslo
│   └── Icono1-4.png            → Iconos de productos
│
├── 🔤 Tipografia/
│   ├── OpenSans-Regular.ttf
│   └── OpenSans-Bold.ttf
│
└── 📐 PNGs/
    ├── Proyecto_final.png      → Mockup escritorio
    └── Proyecto_final_movil.png→ Mockup móvil
```

---

## 🚀 Cómo abrir el proyecto

1. Descarga o clona el repositorio
2. Abre `index.html` directamente en el navegador

> ⚠️ **No abrir los archivos desde dentro de un ZIP.** Las imágenes no cargarán.

---

## 🎨 Especificaciones de diseño

### Colores

| 🟥 Nombre      | Variable CSS        | Hex       |
|----------------|---------------------|-----------|
| Rojo           | `--red-color`       | `#d03b40` |
| Beige          | `--beige-color`     | `#ded6c0` |
| Blanco         | `--white-color`     | `#f5f0ed` |
| Gris oscuro    | `--gray-color`      | `#241d1b` |
| Texto claro    | `--light-text`      | `#f5f0ed` |
| Texto oscuro   | `--dark-text`       | `#3c3c3b` |

### Tipografía

- 🖋️ **Playfair Display** — Títulos principales (`h1`, `h2`). Elegante, con serifa.
- 📝 **Open Sans** — Cuerpo de texto, menú, botones. Legible y moderna.
- Cargadas desde **Google Fonts** + archivos `.ttf` locales como respaldo offline.

### Tamaños de fuente

| Nivel           | Variable CSS          | Tamaño |
|-----------------|-----------------------|--------|
| Encabezado 1    | `--font-size-level1`  | 44px   |
| Encabezado 2    | `--font-size-level2`  | 28px   |
| Encabezado 3    | `--font-size-level3`  | 24px   |
| Cuerpo de texto | `--font-size-text`    | 16px   |
| Botones         | `--font-size-buttons` | 14px   |

---

## 📋 Secciones de la web

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Imagen de fondo (`Fondo1.jpg`) con logo, menú y título principal |
| 2 | **Brunch / Fiestas** | Dos bloques en paralelo, rojo y beige |
| 3 | **Ven a desayunar** | Imagen de fondo (`Fondo2.jpg`) con botón de acción |
| 4 | **Productos** | Cuatro bloques con iconos: Pan, Tartas, Dulces, Ecológicos |
| 5 | **Contacto / Ubicación** | Dos bloques en paralelo, beige y rojo |
| 6 | **Footer** | Barra oscura con derechos reservados |

---

## ✅ Estado del proyecto

### Ya hecho

- [x] HTML semántico con todas las secciones
- [x] CSS con reset de Meyer, variables CSS y diseño mobile-first
- [x] Menú hamburguesa funcional con JavaScript
- [x] Overlay oscuro al abrir el menú en móvil
- [x] Scroll suave entre secciones
- [x] Layout responsive: móvil (columna) → escritorio (grid 2x2, fila)
- [x] Imágenes de fondo con overlay para legibilidad del texto
- [x] `.gitignore` con exclusiones para macOS, Windows y editores
- [x] `aria-label` y `aria-expanded` básicos (accesibilidad)
- [x] Estructura visual adaptada al mockup de escritorio (`Proyecto_final.png`)
- [x] Estructura visual adaptada al mockup móvil (`Proyecto_final_movil.png`)
- [x] H1 con `clamp()` para escalar fluidamente según el ancho de pantalla
- [x] Secciones dobles: texto centrado en ambos bloques en móvil
- [x] Productos en móvil: icono centrado arriba, texto centrado abajo (`flex-direction: column`)
- [x] Navbar fija con efecto scroll (transparente → fondo oscuro al bajar 50px)
- [x] Enlace activo en navbar según sección visible (IntersectionObserver)
- [x] Separación y espaciado correctos entre links de la navbar en escritorio
- [x] Animaciones de entrada al hacer scroll (fadeUp con IntersectionObserver)
- [x] Hover en tarjetas de productos (sube + sombra + icono escala)
- [x] Meta tags SEO (description, keywords, robots)
- [x] Open Graph para previews en redes sociales (WhatsApp, Facebook, LinkedIn)
- [x] Twitter Card con imagen grande
- [x] Favicon con imagenes/favicon.png + apple-touch-icon
- [x] URLs absolutas con dominio real (lna005.github.io/CafeteriaOslo)
- [x] Navbar con links correctos: El Espacio / Productos / Ofertas / Reservas / Contacto
- [x] Iconos de productos con círculo rojo de fondo, layout icono izquierda + texto derecha
- [x] Bloque rojo de secciones dobles con texto alineado a la izquierda
- [x] Bloque beige con texto centrado
- [x] Footer alineado a la izquierda con formato `Mes Año · Todos los derechos reservados`
- [x] `max-width` en el hero para que el texto no se estire en pantallas anchas
- [x] `align-items: stretch` en secciones dobles para igualar alturas entre bloques

---

## 🗺️ To-do: Hoja de ruta hacia una web profesional

> Las tareas están ordenadas por prioridad. Empezad por arriba. 👆

---

### 🔴 PRIORIDAD ALTA — Arreglos visuales que se notan mucho


---

### 🟠 PRIORIDAD MEDIA — Funcionalidad y experiencia de usuario

- [x] **Navbar con efecto scroll**


- [ ] **Enlace real a Google Maps**
  - Sustituir `https://maps.google.com` por la URL real de la ubicación del café.



---

### 🟡 PRIORIDAD BAJA — Pulido final y profesionalismo


- [ ] **Animación del botón hamburguesa**
  - Las tres rayitas deberían convertirse en una X al abrirse el menú.
  - Implementar con `transform: rotate()` en CSS sobre las `.burgerLine` cuando el botón tenga la clase activa.

- [ ] **Activar tipografías locales `.ttf` como fallback**
  - Descomentar los `@font-face` en el CSS y apuntar a la carpeta `Tipografia/`.
  - Así la web carga las fuentes aunque no haya conexión a internet.

- [ ] **`max-width` global para pantallas muy grandes**
  - En monitores de más de 1440px el contenido se estira demasiado.
  - Envolver el contenido en un `<div class="container">` con `max-width: 1280px; margin: 0 auto`.

- [ ] **Mejorar el footer**
  - Añadir iconos de redes sociales (Instagram, Facebook) con SVGs.
  - Añadir un segundo nivel con links legales: Aviso Legal, Política de Privacidad, Cookies.

- [ ] **Optimización de imágenes**
  - Convertir `Fondo1.jpg` y `Fondo2.jpg` a formato `.webp` (mismo aspecto, menos peso, más velocidad).
  - Usar `<picture>` en HTML para servir `.webp` a navegadores modernos y `.jpg` como fallback.

---

### 🔵 EXTRA — Para nota


- [ ] **Formulario de contacto real**
  - Sustituir el `mailto:` por un formulario HTML (Nombre, Email, Mensaje).
  - Conectar con [Formspree](https://formspree.io) para recibir los mensajes por email sin necesitar backend.

- [ ] **Modo oscuro**
  - Implementar con `@media (prefers-color-scheme: dark)` en CSS + botón de toggle manual.

- [ ] **Página 404 personalizada**
  - Crear un `404.html` con el estilo del proyecto para cuando alguien entra en una URL que no existe.

---

## 🛠️ Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white)

- **HTML5** — Estructura semántica
- **CSS3** — Flexbox, Grid, variables CSS, media queries, mobile-first
- **JavaScript ES6+** — Menú hamburguesa, eventos, DOM
- **Google Fonts** — Playfair Display + Open Sans