console.log('Jogo Sorteador de Números');
console.log('Desenvolvido por Gabi Abreu');

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numMinimo = parseInt(document.getElementById('de').value);
    let numMaximo = parseInt(document.getElementById('ate').value);
    
    console.log(`Quantidade: ${quantidade} números de ${numMinimo}, até ${numMaximo}`); //verificar valores para fins de teste

    let numerosSorteados = [];
    let numerosUnicos = new Set();

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeros(numMinimo, numMaximo);
        while (numerosUnicos.has(numero)) {
            numero = obterNumeros(numMinimo, numMaximo);
        // O loop continua até que um número único seja gerado
        }
        numerosUnicos.add(numero);
    }
    numerosSorteados = Array.from(numerosUnicos);

    console.log(`Números sorteados: ${numerosSorteados.join(', ')}`);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados.join(', ')}</label>`;

    statusBotao();
}

function obterNumeros (numMinimo, numMaximo) {
    return Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;
}

function statusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    statusBotao();
}


