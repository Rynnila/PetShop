document.body.onload = addElement

function addElement(){

    let carrinho = JSON.parse(localStorage.getItem("cart"));

    if (carrinho !== null){
        let valorTotal = 0.00
        carrinho.forEach(function(item) {

            let preco = item.preco
            let cor = "#ebb608";

            let spanElement = document.createElement("span");
            spanElement.style.color = cor;

            let precoNode = document.createTextNode(preco);
            spanElement.appendChild(precoNode);

            let caminhoImagem = item.src;

            let liElement = document.createElement("li");

            let imgElement = document.createElement("img");
            imgElement.src = caminhoImagem;

            liElement.appendChild(imgElement);

            let textoElement = document.createTextNode(item.nome + " - ");
            liElement.appendChild(textoElement);
            liElement.append(spanElement)

            let listaCarrinho = document.getElementById("listaCarrinho");
            listaCarrinho.appendChild(liElement);

            valorTotal += item.preco;
        });

        let spanElement = document.createElement("span");
        spanElement.style.color = "#ebb608";

        let precoNode = document.createTextNode("R$ " + parseFloat(valorTotal).toFixed(2));
        spanElement.appendChild(precoNode);

        let listaCarrinho = document.getElementById("listaCarrinho");
        let resumoElement = document.createElement("div");
        let valorElement = document.createElement("h3");
        let checkoutElement = document.createElement("button");
        let dropCart = document.createElement("button");
        let checkoutDiv = document.createElement("div");

        checkoutElement.textContent = "Finalizar pedido";
        checkoutElement.className = "btn btn-warning";
        checkoutElement.onclick = () => {
            window.location.href = "checkout.html";
        }

        dropCart.textContent = "Limpar Carrinho";
        dropCart.className = "btn btn-danger";
        dropCart.onclick = () => {
            localStorage.clear();
            window.location.reload()
        };

        valorElement.textContent = "Valor Total: ";

        checkoutDiv.appendChild(checkoutElement);
        checkoutDiv.appendChild(dropCart);
        resumoElement.appendChild(valorElement)
        valorElement.appendChild(spanElement);
        listaCarrinho.appendChild(resumoElement);
        listaCarrinho.appendChild(checkoutDiv);

    }else{
        document.getElementById("card-text").innerHTML = "Seu carrinho está vazio."
    }
}