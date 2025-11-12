function cambiarColor() {
    //Selecciona el elemento H1 (el título)
    const titulo = document.querySelector('h1');      
    
        // cambia la propiedad CSS 'color'
        titulo.style.color = 'red';  // Poner el color en rojo
        
       // !Opcional! Cambiamos el texto para dar feedback
        titulo.innerHTML = '!El titulo ha sido Cambiado!';
    
}