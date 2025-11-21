/* ============================================
   OBJETO CON LAS RUTAS DE LAS IMÁGENES
   ============================================ */

// Aquí guardamos las dos imágenes de cada sección
const imagenesDisponibles = {
    imagen1: [
        'img/naturaleza_1.jpeg',  // Primera imagen
        'img/naturaleza_2.jpeg'   // Segunda imagen
    ],
    imagen2: [
        'img/ciudad_1.jpeg',
        'img/ciudad_2.jpeg'
    ],
    imagen3: [
        'img/arte_1.jpeg',
        'img/arte_2.jpeg'
    ]
};

/* ============================================
   ESTADO ACTUAL DE CADA IMAGEN
   ============================================ */

// Guardamos qué imagen está mostrando cada sección
// false = primera imagen (a)
// true = segunda imagen (b)
let estadoImagenes = {
    imagen1: false,
    imagen2: false,
    imagen3: false
};

/* ============================================
   FUNCIÓN PARA CAMBIAR IMAGEN
   ============================================ */

function cambiarImagen(idImagen) {
    // 1. Buscar el elemento <img> en el HTML
    let elementoImagen = document.getElementById(idImagen);
    
    // 2. Cambiar el estado (alternamos entre false y true)
    estadoImagenes[idImagen] = !estadoImagenes[idImagen];
    
    // 3. Seleccionar qué imagen mostrar
    let indiceImagen;
    if (estadoImagenes[idImagen]) {
        indiceImagen = 1;  // Mostrar segunda imagen (b)
    } else {
        indiceImagen = 0;  // Mostrar primera imagen (a)
    }
    
    // 4. Añadir clase de animación
    elementoImagen.classList.add('imagen-cambiando');
    
    // 5. Cambiar la imagen después de un pequeño retraso
    setTimeout(function() {
        elementoImagen.src = imagenesDisponibles[idImagen][indiceImagen];
        
        // 6. Quitar la clase de animación
        setTimeout(function() {
            elementoImagen.classList.remove('imagen-cambiando');
        }, 500);
    }, 100);
    
    // 7. Mostrar mensaje en consola (para verificar)
    console.log('Imagen cambiada: ' + idImagen);
    console.log('Nueva imagen: ' + imagenesDisponibles[idImagen][indiceImagen]);
}

/* ============================================
   MENSAJE DE BIENVENIDA
   ============================================ */

// Cuando la página cargue, mostrar mensaje
window.addEventListener('load', function() {
    console.log('🖼️ Galería cargada correctamente');
    console.log('Haz clic en las imágenes para cambiarlas');
});