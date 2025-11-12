// Variable para saber en qué color estamos
        // 0 = Rojo, 1 = Amarillo, 2 = Verde
        let estado = 0;
// ========================================
// FUNCIÓN: Cambiar color del semáforo
// ========================================

function cambiarColor() {
    
    // 1. Seleccionar el elemento H1 del título
    let titulo = document.getElementById('titulo');
    
    // 2. Cambiar al siguiente estado (sumar 1)
    estado = estado + 1;
    
    // 3. Si pasamos de 2, volver a 0 (ciclo)
    if (estado > 2) {
        estado = 0;
    }
    
    // 4. Cambiar color y texto según el estado
    if (estado === 0) {
        // Estado ROJO
        titulo.className = 'rojo';
        titulo.textContent = '🔴 ROJO';
        console.log('Cambiado a ROJO');
        
    } else if (estado === 1) {
        // Estado AMARILLO
        titulo.className = 'amarillo';
        titulo.textContent = '🟡 AMARILLO';
        console.log('Cambiado a AMARILLO');
        
    } else if (estado === 2) {
        // Estado VERDE
        titulo.className = 'verde';
        titulo.textContent = '🟢 VERDE';
        console.log('Cambiado a VERDE');
    }
}


// ========================================
// FUNCIÓN: Finalizar el semáforo
// ========================================

function finalizar() {
    
    // 1. Ocultar el título
    let titulo = document.getElementById('titulo');
    titulo.classList.add('oculto');
    
    // 2. Ocultar el botón
    let boton = document.querySelector('.btn-finalizar');
    boton.classList.add('oculto');
    
    // 3. Mostrar la imagen final
    let imagen = document.getElementById('imagenFinal');
    imagen.classList.remove('oculto');

    // 4. Mostrar el botón de reinicio
    let btnReiniciar = document.getElementById('btnReiniciar');
    btnReiniciar.classList.remove('oculto');
    
    // 5. Mensaje en consola
    console.log('🎉 ¡Semáforo finalizado!');
    alert('¡Enhorabuena! Finalizaste el semáforo.Pero puedes reiniciarlo si quieres.');
}
// ========================================
// FUNCIÓN: Reiniciar el semáforo
// ========================================
function reiniciar() {
    // 1. Reiniciar estado
    estado = 0;

    // 2. Mostrar título y botón
    let titulo = document.getElementById('titulo');
    titulo.className = 'rojo';
    titulo.textContent = '🔴 ROJO';
    titulo.classList.remove('oculto');

    let boton = document.querySelector('.btn-finalizar');
    boton.classList.remove('oculto');

    // 3. Ocultar imagen y botón de reinicio
    let imagen = document.getElementById('imagenFinal');
    imagen.classList.add('oculto');

    let btnReiniciar = document.getElementById('btnReiniciar');
    btnReiniciar.classList.add('oculto');

   
}

