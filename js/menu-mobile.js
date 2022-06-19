const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let menu = document. getElementById ('menuhamburger');
let icon = document. getElementById ('xbuger');

icon.addEventListener('click', function () {
        menu.classList.toggle('visible')
    if (menu.classList.contains('visible')){
        icon.src = 'images/hambuguer-aberto.svg';
        
    } else {
        icon.src = 'images/hambuguer-fechado1.svg';
       
    }
})


