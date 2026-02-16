const listaNoticias = [
    {
        img: "../assets/images/jpg/ibirapuera.jpg",
        titulo: "Pesquisa Datafolha mostra aprovação dos paulistanos à concessão do Ibirapuera",
        subtitulo: "Avaliação indica melhorias, conservação e nota média 9,1"
    },
    {
        img: "../assets/images/jpg/polo-gastronomico.jpg",
        titulo: "Novo Polo Gastronômico fortalece empreendedorismo na capital",
        subtitulo: "Iniciativa foca na culinária afro-brasileira e geração de renda"
    },
    {
        img: "../assets/images/jpg/parques-sp.jpg",
        titulo: "Prefeitura entrega novos Parques Municipais em diversas zonas",
        subtitulo: "Novas áreas de lazer em Prainha, Casa Verde e Cidade Ademar"
    }
];

let noticiaAtual = 0;

const elementoImg = document.getElementById("carousel-img");
const elementoTitulo = document.getElementById("news-title");
const elementoSubtitulo = document.getElementById("news-subtitle");
const pontos = document.querySelectorAll(".dot");
const btnAnterior = document.getElementById("btn-prev");
const btnProximo = document.getElementById("btn-next");

function atualizarCarrossel(index) {
    noticiaAtual = index;
    elementoImg.src = listaNoticias[noticiaAtual].img;
    elementoTitulo.innerText = listaNoticias[noticiaAtual].titulo;
    elementoSubtitulo.innerText = listaNoticias[noticiaAtual].subtitulo;

    pontos.forEach((ponto, i) => {
        ponto.classList.toggle("active", i === noticiaAtual);
    });
}

// --- NOVO: Clique nas Bolinhas ---
pontos.forEach((ponto, index) => {
    ponto.addEventListener("click", () => {
        atualizarCarrossel(index);
    });
});

// Eventos de Setas
btnProximo.addEventListener("click", () => {
    let proximo = (noticiaAtual + 1) % listaNoticias.length;
    atualizarCarrossel(proximo);
});

btnAnterior.addEventListener("click", () => {
    let anterior = (noticiaAtual - 1 + listaNoticias.length) % listaNoticias.length;
    atualizarCarrossel(anterior);
});

// --- NOVO: Lógica de Deslizar (Swipe) ---
let touchStartX = 0;
let touchEndX = 0;

const banner = document.querySelector('.main-banner');

banner.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

banner.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, {passive: true});

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        // Deslizou para a esquerda -> Próximo
        btnProximo.click();
    }
    if (touchEndX > touchStartX + 50) {
        // Deslizou para a direita -> Anterior
        btnAnterior.click();
    }
}

// Troca automática
setInterval(() => {
    btnProximo.click();
}, 7000);