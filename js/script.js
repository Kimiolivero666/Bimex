// Obtenemos los elementos necesarios
const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const menuLinks = dropDownMenu.querySelectorAll("a");

// Función para cerrar el menú
function closeMenu() {
  dropDownMenu.classList.remove("open");
}

// Evento clic para el botón
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

// Evento clic para cada enlace del menú
menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
