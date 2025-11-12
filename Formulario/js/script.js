/* ============================================
   PASO 1: CAPTURAR EL EVENTO SUBMIT
   ============================================ */

// Busca en el HTML el elemento con id="formulario"
// Devuelve ese elemento para poder trabajar con él
document.getElementById('formulario').addEventListener('submit', function(e) {
    //addEventListener → "escucha" cuando pasa algo
    //'submit' → se activa cuando se envía el formulario (al hacer clic en "Registrar")
    //function(e) → función que se ejecuta cuando ocurre el evento
    // Evitamos que la página se recargue
    e.preventDefault();
    
    // Mensaje en consola para verificar que funciona
    console.log('¡Formulario enviado!');




    /* ============================================
       PASO 2: OBTENER LOS VALORES DE LOS INPUTS
       ============================================ */
    
    // Obtenemos el valor de cada input por su ID
    //document.getElementById('nombre') → busca el input con id="nombre"
    //.value → obtiene lo que el usuario escribió dentro
   //let nombre = → guarda ese valor en una variable llamada nombre
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('edad').value;
    
    // Mostramos los valores en consola
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Edad:', edad);

    /* ============================================
       PASO 3: CREAR HTML DINÁMICO CON LOS DATOS
       ============================================ */
    
    // Creamos el HTML con los datos del usuario usando template literals
    let infoHTML = `
        <p><strong>📝 Nombre:</strong> ${nombre}</p>
        <p><strong>📧 Email:</strong> ${email}</p>
        <p><strong>🎂 Edad:</strong> ${edad} años</p>
        <p><strong>✅ Estado:</strong> Registrado exitosamente</p>
    `;
    
    // Mostramos en consola el HTML generado
    console.log('HTML generado:', infoHTML);


    /* ============================================
       PASO 4: INSERTAR HTML EN LA PÁGINA
       ============================================ */
    
    // Seleccionamos el contenedor donde va la info
    let contenedorInfo = document.getElementById('info-usuario');
    
    // Insertamos el HTML dentro del contenedor
    contenedorInfo.innerHTML = infoHTML;
    
    console.log('HTML insertado en la página');

        /* ============================================
       PASO 5: MOSTRAR LA TARJETA DE RESULTADO
       ============================================ */
    
    // Seleccionamos la tarjeta de resultado
    let tarjetaResultado = document.getElementById('tarjeta-resultado');
    
    // Quitamos la clase 'tarjeta-hidden' para hacerla visible
    tarjetaResultado.classList.remove('tarjeta-hidden');
    
    console.log('Tarjeta de resultado mostrada');


    /* ============================================
       PASO 6: LIMPIAR EL FORMULARIO
       ============================================ */
    
    // Limpiamos todos los campos del formulario
    this.reset();
    
    console.log('Formulario limpiado');
});

/* ✅ Resumen de todo el JavaScript:

PASO 1: Capturar evento submit y prevenir recarga
PASO 2: Obtener valores de los inputs
PASO 3: Crear HTML dinámico con template literals
PASO 4: Insertar HTML en el contenedor
PASO 5: Mostrar la tarjeta de resultado
PASO 6: Limpiar el formulario


📚 Conceptos aprendidos:

✅ addEventListener() y eventos
✅ preventDefault()
✅ getElementById() y .value
✅ Variables let
✅ Template literals con backticks
✅ Interpolación ${}
✅ innerHTML
✅ classList.remove()
✅ this en eventos
✅ .reset() */


