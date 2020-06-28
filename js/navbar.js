
function showNavbar(){
  const slideMenu = document.getElementById('slide-menu');
  
  if( slideMenu.className === 'no-show'){

     slideMenu.className = 'show';

  }
  else slideMenu.className = 'no-show';

}

function enviar() {
  const nombre = document.getElementById("nombre");

  const apellidos = document.getElementById("apellidos");

  const asunto = document.getElementById("asunto");

  const mensaje = document.getElementById("mensaje");

  nombre.value = "";
  apellidos.value = "";
  asunto.value = "";
  mensaje.value = "";
}
