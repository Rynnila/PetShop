let carrinho = []

function produtos(id) {
    const id_prod = id
    let prod = {}

    switch (id_prod) {
        case 1:
            prod = {
                "id": 1,
                "nome": "Golden Seleção Natural - Ração para Cachorro Filhote",
                "preco": 34.99,
                "src": "assets/imgs/produtos/racao.webp"
            }
            carrinho.push(prod);
            break;
        case 2:
            prod = {
                "id": 2,
                "nome": "Royal Canin Mini - Ração para Cachorro Filhote",
                "preco": 24.99,
                "src": "assets/imgs/produtos/royal_canin.webp"
            }
            carrinho.push(prod)
            break;
        case 3:
            prod = {
                "id": 3,
                "nome": "Brinquedo para Gatos - Rato de Brinquedo",
                "preco": 9.99,
                "src": "assets/imgs/produtos/brinquedo_gato.webp"
            }
            carrinho.push(prod)
            break;
        case 4:
            prod = {
                "id": 4,
                "nome": "Origens Premium Especial Class - Ração para Cães Adultos",
                "preco": 173.61,
                "src": "assets/imgs/produtos/origens.webp"
            }
            carrinho.push(prod)
            break;
        case 5:
            prod = {
                "id": 5,
                "nome": "Catnip - Cansei de Ser Gato",
                "preco": 11.99,
                "src": "assets/imgs/produtos/catnip.webp"
            }
            carrinho.push(prod)
            break;
        case 6:
            prod = {
                "id": 6,
                "nome": "Purina Pro Plan - Ração úmida para Gatos Sterilized",
                "preco": 6.99,
                "src": "assets/imgs/produtos/purinpropaln.webp"
            }
            carrinho.push(prod)
            break;
        case 7:
            prod = {
                "id": 7,
                "nome": "Tapete Higiênico Petz",
                "preco": 25.99,
                "src": "assets/imgs/produtos/tapete.webp"
            }
            carrinho.push(prod)
            break;
        case 8:
            prod = {
                "id": 8,
                "nome": "GranPlus Gourmet - Ração para Cães Adultos de Médio e Grande Porte",
                "preco": 199.99,
                "src": "assets/imgs/produtos/racaogranplus.webp"
            }
            carrinho.push(prod)
            break;
    }
    const t = localStorage.setItem("cart", JSON.stringify(carrinho))
}

// function verCarrinho(){
//     localStorage.setItem("cart", JSON.stringify(carrinho));
// }

function pagar(id){
    if(id == 1){
        alert('Chave PIX: 6835757436811420225119142266');
    }

    if(id == 2){
        for (let i = 0; i < 6; i++) {
            if(i == 0){
                prompt("Digite seu nome: ");
            }
            else if(i == 1){
                prompt("Digite o número do cartão: ");
            }
            else if(i == 2){
                prompt("Digite a data de validade: ");
            }
            else if(i == 3){
                prompt("Digite o seu CPF: ");
            }
            else if(i == 4){
                prompt("Digite o CVV do cartão: ");
            }
            else if(i == 4){
                prompt("Digite sua data de nascimento: ");
            }
        }
        alert("Pagamento confirmado!");
    }
}


