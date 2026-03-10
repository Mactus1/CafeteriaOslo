/* =====================================================================
   CAFÉ OSLO — cafeteria.js
   El JavaScript de la web. Controla:
   1. El menú hamburguesa en móvil
   2. El efecto de scroll en la navbar (transparente → fondo oscuro)
   ===================================================================== */


/* ── VARIABLES DE CONFIGURACIÓN ──────────────────────────────────────────
   Guardamos los selectores aquí arriba para no tener que buscarlos
   repartidos por todo el código. Si cambia un id en el HTML,
   solo hay que tocar esta sección. Mantenimiento feliz.
   ----------------------------------------------------------------------- */

// El contenedor de la navbar (logo + menú)
const SELECTOR_ENCABEZADO  = ".encabezado";

// Clase que activa el fondo oscuro de la navbar al hacer scroll
const CLASE_SCROLLED       = "scrolled";

// Clase que marca el enlace del menú correspondiente a la sección visible
const CLASE_ACTIVO         = "activo";

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


/* ── FUNCIÓN: activarEnlace ──────────────────────────────────────────────
   Marca el enlace del menú correspondiente a la sección que el usuario
   está viendo en ese momento.

   Usa IntersectionObserver, una API del navegador que avisa cuando un
   elemento entra o sale del viewport (la parte visible de la pantalla).
   Es mucho más eficiente que escuchar el evento scroll y calcular
   posiciones manualmente. El navegador se encarga de todo.

   rootMargin: "-40% 0px -55% 0px" significa que la sección se considera
   "activa" cuando su parte central está en pantalla, no cuando asoma
   por arriba o por abajo. Así el cambio de enlace se siente natural.
   ----------------------------------------------------------------------- */
function activarEnlace() {

    // Recogemos todas las secciones que tienen un enlace en el menú
    const secciones = document.querySelectorAll("#espacio, #agendaReservacion, #ofertas, #productos, #contacto");

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {

                // Solo nos interesa cuando una sección ENTRA en el viewport
                if (!entrada.isIntersecting) return;

                // Quitamos .activo de todos los enlaces
                const todosLosEnlaces = document.querySelectorAll(".opcionMenu");
                todosLosEnlaces.forEach((enlace) => enlace.classList.remove(CLASE_ACTIVO));

                // Buscamos el enlace cuyo href apunta a la sección visible
                // entrada.target.id devuelve el id de la sección (ej: "productos")
                const enlaceActivo = document.querySelector(`.opcionMenu[href="#${entrada.target.id}"]`);
                if (enlaceActivo) {
                    enlaceActivo.classList.add(CLASE_ACTIVO);
                }
            });
        },
        {
            // La sección se activa cuando su zona central cruza la pantalla.
            // Ajusta estos valores si el cambio de enlace se siente demasiado
            // pronto o demasiado tarde.
            rootMargin: "-40% 0px -55% 0px"
        }
    );

    // Le decimos al observador qué secciones vigilar
    secciones.forEach((seccion) => observador.observe(seccion));
}


/* ── FUNCIÓN: efectoScroll ───────────────────────────────────────────────
   Escucha el scroll de la página y añade/quita la clase .scrolled
   en la navbar según si el usuario está arriba del todo o no.

   El umbral es 50px: menos de eso → navbar transparente (estamos en el hero).
   Más de 50px → navbar con fondo oscuro (ya salimos del hero).

   window.scrollY es la cantidad de píxeles que se ha desplazado la página.
   ----------------------------------------------------------------------- */
function efectoScroll() {
    const encabezado = document.querySelector(SELECTOR_ENCABEZADO);

    // Si hemos bajado más de 50px, añadimos el fondo oscuro
    if (window.scrollY > 50) {
        encabezado.classList.add(CLASE_SCROLLED);
    } else {
        encabezado.classList.remove(CLASE_SCROLLED);
    }
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

// Registramos el efecto scroll.
// El evento "scroll" se dispara cada vez que el usuario mueve la página.
// {passive: true} le dice al navegador que no vamos a llamar a preventDefault(),
// lo que le permite optimizar el rendimiento del scroll. Detalle técnico fino.
window.addEventListener("scroll", efectoScroll, { passive: true });

// Llamamos una vez al cargar para que el estado inicial sea correcto
// (por si alguien recarga la página ya habiendo bajado)
efectoScroll();

// Arrancamos el observador de sección activa.
activarEnlace();

// Arrancamos la función principal. Todo empieza aquí.
nav();