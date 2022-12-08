const btnToggle = document.querySelector(".menuToggle");
let infoMenu = document.querySelector("#info-menu");

btnToggle.addEventListener("click", () => {
    if(infoMenu.classList.contains("active")){
        return infoMenu.classList.remove("active");
        console.log("remove");
    }
    else{
        return infoMenu.classList.add("active");
        console.log("add");
    }
});