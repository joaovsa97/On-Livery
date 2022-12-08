const regBtn = document.querySelector(".open");
const regBtn2 = document.querySelector(".close");
const fechar = document.querySelector(".fechar");
const revelarBtn = document.querySelector(".revelar-pw");

let registro = document.querySelector(".registro");
let login = document.querySelector(".card-login");
let revelar = document.querySelector(".pw");


regBtn.addEventListener("click", () => {
    registro.classList.add("active");
    login.classList.remove("active");
    fechar.classList.add("active");
});

fechar.addEventListener("click", () => {
    registro.classList.add("active");
    login.classList.remove("active");
    fechar.classList.add("active");
});

regBtn2.addEventListener("click", () => {
    registro.classList.remove("active");
    login.classList.add("active");
    fechar.classList.remove("active");
});

fechar.addEventListener("click", () => {
    registro.classList.remove("active");
    login.classList.add("active");
    fechar.classList.remove("active");
});
        
revelarBtn.addEventListener("click", () => {

    if(revelar.type == "password") {
        revelar.type = "text"
    } 
    else{
        revelar.type = "password"
    }

});

////GAMBIARRA////

const revelarBtn2 = document.querySelector(".revelar-pw2");
const revelarBtn3 = document.querySelector(".revelar-pw3");
let revelar2 = document.querySelector(".pw2");
let revelar3 = document.querySelector(".pw3");

revelarBtn2.addEventListener("click", () => {
    if(revelar2.type == "password") {
        revelar2.type = "text"
    } 
    else{
        revelar2.type = "password"
    }

});

revelarBtn3.addEventListener("click", () => {
    if(revelar3.type == "password") {
        revelar3.type = "text"
    } 
    else{
        revelar3.type = "password"
    }

});