//Small device navbar menu click

let nav_ic = document.querySelector(".sm-dropdown");

nav_ic.addEventListener("click",()=>{
    let nav_menu = document.querySelector(".nab-bar");
    nav_menu.classList.toggle("hidden");
})