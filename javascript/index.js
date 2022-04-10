const btn = document.getElementById('boton');
const nav = document.getElementById('nav');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  if (nav.className === 'no_active') {
    nav.classList.add('navigation');
    nav.classList.remove('no_active');
  } else {
    nav.classList.add('no_active');
    nav.classList.remove('navigation');
  }
});
