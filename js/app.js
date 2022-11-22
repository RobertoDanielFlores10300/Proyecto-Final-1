const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const contenedorPlantillas = document.querySelector('.plantillas');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');


    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const plantillas = () =>{
    let plantillasArreglo = [];
    const plantillas = document.querySelectorAll('.muestra');

    platillos.forEach(muestra=> plantillasArreglo = [...plantillasArreglo,platillo]);

    const ensaladas = plantillasArreglo.filter(ensalada=> cont.getAttribute('data-platillo') === 'cont');

    mostrarPlatillos(muestra, plantillasArreglo);

}

const mostrarPlatillos = (muestras) =>{
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorplantillas);
        cont.forEach(ensalada=> contenedorplantillas.appendChild(cont));
    });

    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorplantillas);
        todos.forEach(todo=> contenedorplantillas.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}