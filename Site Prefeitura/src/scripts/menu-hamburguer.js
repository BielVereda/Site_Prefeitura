const menuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
});