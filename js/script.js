const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle("open")
const isOpen = dropDownMenu.classList.contains("open")

toggleBtnIcon.classList = isOpen
? "a-sharp fa-solid fa-bars"
: "a-sharp fa-solid fa-bars"

}



// carrusel servicios

