document.addEventListener("DOMContentLoaded", () => {
    // 1. Dados do Carrossel (Adicione suas outras imagens aqui)
    const slides = [
        {
            image: "./src/assets/images/jpg/ibirapuera.jpg", // Imagem 1
            title:
                "Pesquisa Datafolha mostra aprovação dos paulistanos à concessão do Ibirapuera",
            subtitle: "Avaliação indica melhorias, conservação e nota média 9,1",
        },
        {
            image: "./src/assets/images/jpg/polo-gastronomico.jpg", // Troque por outra imagem se tiver
            title: "Novo Polo Gastronômico fortalece empreendedorismo na capital",
            subtitle: "Iniciativa foca na culinária afro-brasileira e geração de renda",
        },
        {
            image: "./src/assets/images/jpg/parques-sp.jpg", 
            title: "Prefeitura entrega novos Parques Municipais em diversas zonas",
            subtitle: "Novas áreas de lazer em Prainha, Casa Verde e Cidade Ademar",
        },
    ];

    // 2. Seleção de Elementos
    const imgElement = document.getElementById("carousel-img");
    const titleElement = document.getElementById("news-title");
    const subtitleElement = document.getElementById("news-subtitle");
    const dots = document.querySelectorAll(".dot");

    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const container = document.querySelector(".news-container"); // Área de toque

    let currentIndex = 0;

    // 3. Função para Atualizar a Tela
    function updateSlide(index) {
        // Adiciona classe de animação
        imgElement.classList.remove("fade-anim");
        titleElement.parentElement.classList.remove("fade-anim");

        // Reiniciando a animação CSS
        void imgElement.offsetWidth;

        imgElement.classList.add("fade-anim");
        titleElement.parentElement.classList.add("fade-anim");

        // Atualiza conteúdo
        imgElement.src = slides[index].image;
        titleElement.textContent = slides[index].title;
        subtitleElement.textContent = slides[index].subtitle;

        // Atualiza bolinhas (dots)
        dots.forEach((d) => d.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // 4. Funções de Navegação
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
    }

    // Eventos de Clique (Setas)
    if (btnNext) btnNext.addEventListener("click", nextSlide);
    if (btnPrev) btnPrev.addEventListener("click", prevSlide);

    // Eventos de Clique (Bolinhas)
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    // 5. Lógica de Arrastar (Swipe) para Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener(
        "touchstart",
        (e) => {
            touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
    );

    container.addEventListener(
        "touchend",
        (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        },
        { passive: true },
    );

    function handleSwipe() {
        const threshold = 50;

        if (touchEndX < touchStartX - threshold) {
            nextSlide();
        }

        if (touchEndX > touchStartX + threshold) {
            prevSlide();
        }
    }
});
