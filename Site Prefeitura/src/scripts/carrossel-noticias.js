// Dados das notícias extraídos do seu PDF (Página 2 e 3)
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

// Seleção dos elementos (mantendo os IDs que você já usa)
const elementoImg = document.getElementById("carousel-img");
const elementoTitulo = document.getElementById("news-title");
const elementoSubtitulo = document.getElementById("news-subtitle");
const pontos = document.querySelectorAll(".dot");
const btnAnterior = document.getElementById("btn-prev");
const btnProximo = document.getElementById("btn-next");

function atualizarCarrossel(index) {
    noticiaAtual = index;

    // 1. Troca a imagem
    elementoImg.src = listaNoticias[noticiaAtual].img;

    // 2. Troca o texto dentro do bloco roxo
    elementoTitulo.innerText = listaNoticias[noticiaAtual].titulo;
    elementoSubtitulo.innerText = listaNoticias[noticiaAtual].subtitulo;

    // 3. Atualiza os pontos (dots)
    pontos.forEach((ponto, i) => {
        if (i === noticiaAtual) {
            ponto.classList.add("active", "filled");
        } else {
            ponto.classList.remove("active", "filled");
        }
    });
}

// Eventos de clique
btnProximo.addEventListener("click", () => {
    let proximo = (noticiaAtual + 1) % listaNoticias.length;
    atualizarCarrossel(proximo);
});

btnAnterior.addEventListener("click", () => {
    let anterior = (noticiaAtual - 1 + listaNoticias.length) % listaNoticias.length;
    atualizarCarrossel(anterior);
});

// Troca automática a cada 7 segundos
setInterval(() => {
    btnProximo.click();
}, 7000);