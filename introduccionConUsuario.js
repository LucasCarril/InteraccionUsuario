document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var mensajeInput = document.getElementById('mensajeInput');
    var guardarBtn = document.getElementById('guardarBtn');
    var mensajeGuardado = document.getElementById('mensajeGuardado');
  
    // Cargar mensaje guardado al refrescar la página
    if (localStorage.getItem('mensaje')) {
      mensajeGuardado.textContent = localStorage.getItem('mensaje');
    }
  
    // Función para guardar el mensaje
    function guardarMensaje() {
      var mensaje = mensajeInput.value;
      localStorage.setItem('mensaje', mensaje);
      mensajeGuardado.textContent = mensaje;
    }
  
    // Agregar evento al botón de guardar
    guardarBtn.addEventListener('click', guardarMensaje);
  });
  