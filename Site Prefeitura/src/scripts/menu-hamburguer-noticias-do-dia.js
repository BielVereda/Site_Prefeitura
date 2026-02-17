document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o botão e o menu (tentando por ID e por Classe para não ter erro)
    const menuBtn = document.getElementById("mobile-menu-btn") || document.querySelector(".mobile-menu-icon");
    const navMenu = document.getElementById("nav-menu") || document.querySelector(".nav-menu");
    
    // Procura o ícone dentro do botão
    const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (!menuBtn || !navMenu) {
        console.error("Erro: Botão ou Menu não encontrados no HTML da página Ibirapuera.");
        return;
    }

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Impede que o clique "vaze" para outros elementos

        navMenu.classList.toggle("active");
        const isOpen = navMenu.classList.contains("active");

        // Troca o ícone (Barra para X)
        if (menuIcon) {
            if (isOpen) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
                document.body.style.overflow = "hidden"; // Trava o scroll
            } else {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
                document.body.style.overflow = "auto"; // Libera o scroll
            }
        }
    });

    // Fecha o menu ao clicar em qualquer link lá dentro
    const links = navMenu.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
            document.body.style.overflow = "auto";
        });
    });
});