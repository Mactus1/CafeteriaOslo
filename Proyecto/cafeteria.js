//Enlace botón hamburguesa
let botonMenu = "#enlaceMenu";

//Boton del menu a desplegar
let menuPorDesplegar = "#menu";

//clase para desplegar el menu lentamente (sin punto)
let despliegaMenuSwitch = "despliega-menu";

//Clase del encabezado para agregar pixeles cuando se despliege el menu
var headerText = ".headerText"

//Agregar pantalla mas oscura al oprimir navegacion
let body = ".body";

//Quitar menu al escoger una opción
let navButton = "opcionMenu";

function nav(){
    let boton = document.querySelector(botonMenu);
    boton.addEventListener("click", despliegaMenu, false);

    let opcionMenu = document.getElementsByClassName(navButton);
    for(let i = 0; i < opcionMenu.length; i++){
        opcionMenu[i].addEventListener("click", despliegaMenu, false);
    }
    
}


function despliegaMenu(e){
    var despliega = document.querySelector(menuPorDesplegar);
    despliega.classList.toggle(despliegaMenuSwitch);
    console.log("siiii")

    
	var tituloPagina = document.querySelector(headerText);
	tituloPagina.classList.toggle(despliegaMenuSwitch);

    let cuerpoPagina = document.querySelector(body);
    cuerpoPagina.classList.toggle(despliegaMenuSwitch);
}

//Clase para saber que el js está activo
document.querySelector("html").classList.add("js");

//Activar la función para el botón
nav();