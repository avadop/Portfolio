let show = false;

function showNavbar(){
  const slideMenu = document.getElementById('slide-menu');
  
  if( slideMenu.className === 'no-show'){

     slideMenu.className = 'show';

  }
  else slideMenu.className = 'no-show';

}