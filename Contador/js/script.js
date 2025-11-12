let contador = 0;

function aumentar() {
    contador++;
    actualizarNumero();
}

function disminuir() {
    contador--;
    actualizarNumero();
}

function resetear() {
    contador = 0;
    actualizarNumero();
}

function actualizarNumero() {
    document.getElementById('numero').textContent = contador;
    
    // Cambiar color según el valor
    let elemento = document.getElementById('numero');
    if (contador > 0) {
        elemento.style.color = '#10b981';
    } else if (contador < 0) {
        elemento.style.color = '#ef4444';
    } else {
        elemento.style.color = '#667eea';
    }
}