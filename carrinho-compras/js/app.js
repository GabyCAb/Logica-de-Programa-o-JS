console.log ("Feito por Gabi Abreu, 2026.")

let total = 0;

limpar();

function adicionar() {
    //recuperar nome, quantidade e valor do item
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valor = produto.split("R$")[1];
    let quantidade = parseInt(document.getElementById("quantidade").value);

    //subtotal do item
    let subtotal = valor * quantidade;

    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += '<section class="carrinho__produtos__produto"><span class="texto-azul">' + quantidade + 'x</span> ' + nomeProduto + ' <span class="texto-azul">R$' + subtotal + '</span></section>';

    //atualizar total
    total = total + subtotal;
    let totalFinal = document.getElementById("valor-total");
    totalFinal.innerHTML = 'Total: R$' + total;

    document.getElementById("quantidade").value = 0;
    
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'Total: R$0';
}