document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = menuBtn.querySelector("i");

    if (!menuBtn || !navMenu) return; // Segurança caso o ID mude

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navMenu.classList.toggle("active");
        
        const isOpen = navMenu.classList.contains("active");
        
        // Troca o ícone
        if (isOpen) {
            menuIcon.classList.replace("fa-bars", "fa-xmark");
            document.body.style.overflow = "hidden"; // Trava o scroll do site ao abrir
        } else {
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            document.body.style.overflow = "auto";
        }
    });

    // Fecha ao clicar em qualquer link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            document.body.style.overflow = "auto";
        });
    });
});