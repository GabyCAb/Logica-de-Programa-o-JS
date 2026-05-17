console.log ("Feito por Gabi Abreu, 2026.");

function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    if (tipo.value == "pista") {
        comprarPista(qtd);
    }
    else if (tipo.value == "inferior") {
        comprarInferior(qtd);
    }
        else if (tipo.value == "superior") {
            comprarSuperior(qtd);
        }
     else {
        alert("Selecione um tipo de ingresso válido.");
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtd > qtdPista) {
        alert("Quantidade indisponível. Temos apenas " + qtdPista + " ingressos de pista disponíveis.");
    } 
    else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert ("Compra realizada com sucesso! Você comprou " + qtd + " ingresso(s) de pista.");

    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtd > qtdInferior) {
        alert("Quantidade indisponível. Temos apenas " + qtdInferior + " ingressos inferiores disponíveis.");
    }
    else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert ("Compra realizada com sucesso! Você comprou " + qtd + " ingresso(s) inferior.");
    }   
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível. Temos apenas " + qtdSuperior + " ingressos superiores disponíveis.");
    }
    else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert ("Compra realizada com sucesso! Você comprou " + qtd + " ingresso(s) superior.");
    }
}