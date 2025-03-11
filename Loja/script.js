//Declaração da variavel produtos global
let produtos;

window.onload = function(){
    var storedUser = localStorage.getItem("usuario");
    var user = JSON.parse(storedUser)
    document.getElementById("user").textContent = user.name
    document.getElementById("perfil").textContent = user.name
    document.getElementById("idPerfil").textContent = user.id
    console.log(typeof storedUser, ":", storedUser)
};

document.addEventListener("DOMContentLoaded", function(){
    //Fetch dos produtos e armazenamento da variavel globa
    fetch("../Dados/loja.json") //Fetch é uma função de iteração, aqui é utilizado para percorrer os dados do JSON
    .then((response) => response.json())
    .then((data) => {
        produtos = data
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto,index) => {
            const card = document.createElement("div");
            card.className = "card"
            card.style.width = "18rem"

            const imagem = document.createElement("img")
            imagem.src = produto.imagem
            imagem.className = "card-img-top"

            const cardBody = document.createElement("div")
            cardBody.className = "card-body"

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title"
            cardTitle.textContent = produto.descricao

            const cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.textContent = "preco: $" + produto.preco.toFixed(2);

            const btnAdicionarAoCarrinho = document.createElement("a");
            
            btnAdicionarAoCarrinho.href= '#'
            btnAdicionarAoCarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho"
            btnAdicionarAoCarrinho.setAttribute("data-indice", index)
            
            console.log(produto,index)
        })            
        })
        .catch((error) => console.log(error + "Erro ao carregar arquivo JSON"));
    })