/*
#023E73 - navy blue
#F2F2F2 - faded white
#F29F05 - mod yellow
#732439 - dark maroon
#B2003D - violet
font-family: 'Raleway', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Pacifico', cursive;
*/


//Mobile Menu
var toggleMenu = document.querySelector('.toggleMenu');
var nav = document.querySelector('.nav');
var overlay = document.querySelector('.overlay');


toggleMenu.addEventListener('click', showNav);


function showNav() {
  nav.classList.toggle('show');
  overlay.classList.toggle('showOverlay');
  
}


