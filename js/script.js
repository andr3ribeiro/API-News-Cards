const artigos = [
  {
    titulo: "Primeiro Artigo",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/200?random=1",
  },
  {
    titulo: "Segundo Artigo",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/200?random=2",
  },
  {
    titulo: "Terceiro Artigo",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "https://picsum.photos/300/200?random=3",
  },
];

const artigosCard = artigos.map((valor) => {
  let cartao = document.createElement("div");
  cartao.innerHTML = `<div class="card-body"><img src="${valor.imagem}"><h3>${valor.titulo}</h3><p>${valor.texto}</p></div>`;
  cartao.classList.add("card");
  document.getElementById("card-deck").appendChild(cartao);
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => listaDados(json));

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => listaPhotos(json));

const listaPhotos = (listaT) => listaT;

const listaDados = (listaP) => {
  listaP.map((item) => {
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = item.title;

    let cardTexto = document.createElement("p");
    cardTexto.classList.add("card-text");
    cardTexto.innerHTML = item.body;

    let cardCartao = document.createElement("div");
    cardCartao.classList.add("card");
    cardCartao.setAttribute("id", "card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.setAttribute("id", "card-body");

    document
      .getElementById("card-deck")
      .appendChild(cardCartao)
      .appendChild(cardBody)
      .appendChild(cardTitle);
    document
      .getElementById("card-deck")
      .appendChild(cardCartao)
      .appendChild(cardBody)
      .appendChild(cardTexto);
  });
};
