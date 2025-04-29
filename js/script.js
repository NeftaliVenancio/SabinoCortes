// Script para ocultar el preloader al cargar la página
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('fade-out');

  preloader.addEventListener('transitionend', () => {
    preloader.style.display = 'none';
  });
});


//Formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Previene el envío del formulario por defecto

  // Captura el nombre ingresado
  var userName = document.getElementById("nombre").value;

  // Oculta el formulario y muestra el mensaje de agradecimiento
  document.getElementById("formulario-container").style.display = "none";
  document.getElementById("thanks-message").style.display = "block";

  // Actualiza el nombre en el mensaje de agradecimiento
  document.getElementById("user-name").textContent = userName;
});
