# Cafetería Oslo 🍞

## Estructura del proyecto (desktop) // Ele ayudando ;b

```
CAFETERÍA/
├── imagenes/
│   ├── Fondo1.jpg
│   ├── Fondo2.jpg
│   ├── Icono1.png
│   ├── Icono2.png
│   ├── Icono3.png
│   ├── Icono4.png
│   └── Logo.png
├── index.html
├── menu.js
├── README.md
└── style.css
```

---

## Especificaciones de diseño

### Colores
| Nombre | Hex |
|---|---|
| Rojo | `#d03b40` |
| Beige | `#ded6c0` |
| Blanco | `#f5f0ed` |
| Gris oscuro | `#241d1b` |
| Texto claro | `#f5f0ed` |
| Texto oscuro | `#3c3c3b` |

### Tipografía
- **Open Sans Regular** y **Open Sans Extrabold**
- Cargada desde Google Fonts

### Tamaños de fuente
| Nivel | Tamaño |
|---|---|
| Encabezado nivel 1 | 44px |
| Encabezado nivel 2 | 28px |
| Encabezado nivel 3 | 24px |
| Cuerpo de texto | 16px |
| Botones | 14px |

---

## Secciones de la web

1. **Hero** — Imagen de fondo (`Fondo1.jpg`) con el logo, menú de navegación y título principal
2. **Brunch / Fiestas** — Dos bloques en paralelo, rojo y beige
3. **Ven a desayunar** — Imagen de fondo (`Fondo2.jpg`) con botón de llamada a la acción
4. **Productos** — Cuatro bloques con iconos: Pan, Tartas, Dulces, Ingredientes ecológicos
5. **Contacto / Ubicación** — Dos bloques en paralelo, beige y rojo
6. **Footer** — Barra oscura con derechos reservados

---

## Lo que está hecho

- [x] Estructura HTML completa con todas las secciones
- [x] Variables CSS con colores y tamaños según especificaciones
- [x] Hero con imagen de fondo real (`Fondo1.jpg`)
- [x] Sección "Ven a desayunar" con imagen de fondo real (`Fondo2.jpg`)
- [x] Logo real (`Logo.png`) enlazado
- [x] Iconos reales (`Icono1-4.png`) enlazados en la sección de productos
- [x] Layout desktop: navbar horizontal, secciones en dos columnas, productos en grid 2x2
- [x] Botón con hover animado
- [x] CSS separado del HTML
- [x] Fuente Open Sans cargada desde Google Fonts
- [x] `min-height` para controlar altura de bloques (sugerencia aplicada)
- [x] `background-size: cover` en imágenes de fondo (sugerencia aplicada)

---

### Desktop
- [ ] Navbar: efecto scroll (transparente → fondo oscuro al bajar la página)
- [ ] Navbar: resaltar el enlace activo según la sección visible
- [ ] Animaciones de entrada al hacer scroll en cada sección
- [ ] Hover en tarjetas de productos (sombra o zoom suave)
- [ ] Botón "Descubre nuestros productos" con scroll suave hasta la sección
- [ ] Enlace real a Google Maps en el footer
- [ ] Email clickable con `mailto:` en la sección de contacto
- [ ] Favicon (icono en la pestaña del navegador)
- [ ] Scroll suave entre secciones (`scroll-behavior: smooth`)
- [ ] Limitar ancho máximo en pantallas muy grandes (`max-width`)

### General
- [ ] Añadir tipografías locales `.ttf` como alternativa a Google Fonts
- [ ] Revisar accesibilidad (atributos `alt`, contraste, navegación por teclado)

---

## Tecnologías usadas

- HTML5
- CSS3 (Flexbox, Grid, variables CSS, media queries)
- JavaScript (en progreso)
- Google Fonts (Open Sans)