function toggles() {
  const idDiv = document.getElementById("menutogglediv");
  const idDivMenu = document.getElementById("menu");

  const menuOpened = idDiv.classList.contains("menu-opened");

  if (menuOpened) {
    idDiv.style.opacity = 0;
    idDiv.style.transition = "opacity 0.3s ease-in-out";
    idDiv.classList.remove("menu-opened");
    idDivMenu.querySelector(".image-menu").src = "./assets/img/svg/menu.svg";
  } else {
    idDiv.style.opacity = 1;
    idDiv.style.transition = "opacity 0.3s ease-in-out";
    idDiv.classList.add("menu-opened");
    idDivMenu.querySelector(".image-menu").src = "./assets/img/svg/close.svg";
  }
}
