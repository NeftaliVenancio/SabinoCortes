// Script para ocultar el preloader al cargar la página
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');

  preloader.addEventListener('transitionend', () => {
    preloader.style.display = 'none';
  });
});
