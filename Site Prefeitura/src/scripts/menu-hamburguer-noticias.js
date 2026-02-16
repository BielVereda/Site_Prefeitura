document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = menuBtn.querySelector("i");

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navMenu.classList.toggle("active");
        
        const isOpen = navMenu.classList.contains("active");
        
        if (isOpen) {
            menuIcon.classList.replace("fa-bars", "fa-xmark");
            document.body.style.overflow = "hidden";
        } else {
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            document.body.style.overflow = "auto";
        }
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            document.body.style.overflow = "auto";
        });
    });
});