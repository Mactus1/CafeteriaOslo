/* =====================================================================
   CAFÉ OSLO — cafeteria.js
   El JavaScript de la web. Por ahora hace una cosa, pero la hace bien:
   controlar el menú hamburguesa en móvil.
   ===================================================================== */


/* ── VARIABLES DE CONFIGURACIÓN ──────────────────────────────────────────
   Guardamos los selectores aquí arriba para no tener que buscarlos
   repartidos por todo el código. Si cambia un id en el HTML,
   solo hay que tocar esta sección. Mantenimiento feliz.
   ----------------------------------------------------------------------- */

// El botón que pulsa el usuario (las tres rayitas)
const SELECTOR_BOTON       = "#enlaceMenu";

// El contenedor del menú que se despliega
const SELECTOR_MENU        = "#menu";

// Clase CSS que activa la animación de apertura del menú (definida en style.css)
const CLASE_MENU_ABIERTO   = "despliega-menu";

// El bloque de texto del hero (baja un poco cuando el menú se abre para no quedar tapado)
const SELECTOR_HERO_TEXT   = ".headerText";

// El body entero (recibe la clase que genera el overlay oscuro de fondo)
const SELECTOR_BODY        = ".body";

// Clase compartida por todos los enlaces del menú (Inicio, Reservas, etc.)
const CLASE_OPCION_MENU    = "opcionMenu";


/* ── FUNCIÓN PRINCIPAL: despliegaMenu ────────────────────────────────────
   Se ejecuta cuando el usuario pulsa la hamburguesa O elige una opción.

   classList.toggle() funciona como un interruptor:
   - Si el elemento NO tiene la clase → la añade (menú se abre)
   - Si el elemento SÍ tiene la clase → la quita (menú se cierra)
   El CSS se encarga del resto (ver style.css, sección "ESTADOS DEL MENÚ").
   ----------------------------------------------------------------------- */
function despliegaMenu() {

    // Abrir/cerrar el menú desplegable
    const menu = document.querySelector(SELECTOR_MENU);
    menu.classList.toggle(CLASE_MENU_ABIERTO);

    // Mover el texto del hero hacia abajo para que no quede detrás del menú
    const heroText = document.querySelector(SELECTOR_HERO_TEXT);
    heroText.classList.toggle(CLASE_MENU_ABIERTO);

    // Activar/desactivar el overlay oscuro sobre el resto de la página
    const body = document.querySelector(SELECTOR_BODY);
    body.classList.toggle(CLASE_MENU_ABIERTO);

    // Actualizar aria-expanded para accesibilidad.
    // Los lectores de pantalla usan este atributo para informar al usuario
    // si el menú está abierto o cerrado. Pequeño detalle, gran impacto.
    const boton = document.querySelector(SELECTOR_BOTON);
    const estaAbierto = menu.classList.contains(CLASE_MENU_ABIERTO);
    boton.setAttribute("aria-expanded", estaAbierto ? "true" : "false");
}


/* ── FUNCIÓN: nav ────────────────────────────────────────────────────────
   Inicializa todos los event listeners del menú.
   Se llama una sola vez al final del script.

   Escucha dos tipos de clics:
   1. El botón hamburguesa → abre o cierra el menú
   2. Cualquier enlace del menú → cierra el menú al navegar
      (Si no lo cerramos, el menú quedaría abierto al saltar a una sección)
   ----------------------------------------------------------------------- */
function nav() {

    // Listener para la hamburguesa
    const boton = document.querySelector(SELECTOR_BOTON);
    boton.addEventListener("click", despliegaMenu);

    // Listeners para cada opción del menú.
    // getElementsByClassName devuelve una HTMLCollection (parecida a un array)
    // así que necesitamos un bucle para añadir el listener a cada elemento.
    const opcionesMenu = document.getElementsByClassName(CLASE_OPCION_MENU);
    for (let i = 0; i < opcionesMenu.length; i++) {
        opcionesMenu[i].addEventListener("click", despliegaMenu);
    }
}


/* ── INICIALIZACIÓN ──────────────────────────────────────────────────────
   Esta clase le dice al CSS que JavaScript está activo y cargado.
   Algunos estilos del menú solo aplican cuando JS funciona (selector .js).
   Si JS falla o está desactivado, el menú seguirá siendo usable.
   Esto se llama "progressive enhancement" y es buena práctica.
   ----------------------------------------------------------------------- */
document.querySelector("html").classList.add("js");

// Arrancamos la función principal. Todo empieza aquí.
nav();