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

// dark and ligth
var icon = document.getElementById('icon');

icon.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.src = './src/icon/moon.png';
    icon.title = 'Modo dark';
  } else {
    icon.src = './src/icon/sun.png';
    icon.title = 'Modo Ligth';
  }
};
