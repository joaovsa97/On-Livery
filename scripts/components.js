//Script NavBar

let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");
let info = document.querySelector(".info")
let header = document.querySelector("header");

// adiciona classes aos itens do menu de busca para ativar o css
searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    closeBtn.classList.add("active");
    menuToggle.classList.add("hide");
    header.classList.remove("open");
});

// Remove classes dos itens do menu de busca para desativar o css
closeBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    menuToggle.classList.remove("hide");
});

// adiciona classes ao menu mobile para ativar o css e remove classes da busca(apenas 1 elemento pode ser aberto por vez)
menuToggle.addEventListener("click", () => {
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    header.classList.toggle("open");
});

window.onscroll = function() {fixar()};

var navbar = document.querySelector("header");

var sticky = navbar.offsetTop;

function fixar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
