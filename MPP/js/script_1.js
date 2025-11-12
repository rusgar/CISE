function cambiarColor() {
    // 1. Selecciona el elemento H1 (el título)
    const titulo = document.querySelector('h1');
    
    // 2. Establecemos los textos originales y nuevos
    const textoOriginal = 'Mi Primer Título Importante';
    const nuevoTexto = '¡El Título ha Sido Activado!';
    
    // 3. LÓGICA CONDICIONAL: SI el texto es el original, lo cambiamos. SI NO, lo restauramos.
    
    if (titulo.innerHTML === textoOriginal) {
        // Bloque 1: El título AÚN NO ha cambiado (Primera Vez)
        titulo.style.color = 'red';  // Poner el color en rojo
        titulo.innerHTML = nuevoTexto; // Poner el nuevo texto
    } else {
        // Bloque 2: El título YA ha cambiado (Volver al estado inicial)
        titulo.style.color = 'darkblue'; // Volver al color original (CSS)
        titulo.innerHTML = textoOriginal; // Volver al texto original
    }
}