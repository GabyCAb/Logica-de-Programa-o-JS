console.log("Adaptado por Gabi Abreu"); //Identificação do autor

let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female"); //Ferramenta de voz para acessibilidade
}

function mensagemInicial() {
    exibirNaTela("h1", "Jogo do Número Secreto");
    exibirNaTela("p", "Tente advinhar o número secreto<br>entre 1 e " + numeroLimite + "!");
}
mensagemInicial();

function gerarNumeroSecreto() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    let quantidadeNumerosSorteados = numerosSorteados.length;
    if (quantidadeNumerosSorteados == numeroLimite) {
        alert("Todos os números entre 1 e " + numeroLimite + " já foram sorteados! Reiniciando o jogo.");
        numerosSorteados = []; // Limpar a lista de números sorteados
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto(); // Gerar um novo número se já tiver sido sorteado
    }
    else {
        numerosSorteados.push(numeroEscolhido); // Adicionar o número sorteado à lista
        return numeroEscolhido;
    }
}
console.log ("Número secreto gerado:", numeroSecreto); //Exibição do número secreto no console para teste
console.log ("Números sorteados até agora:", numerosSorteados); //Exibição dos números sorteados no console para teste

function verificarPalpite() {
    let palpite = document.querySelector("input").value;
    
    if (palpite == numeroSecreto) {
        exibirNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirNaTela ("p", "Você descobriu o número secreto!<br>Acertou em " + tentativas + " " + palavraTentativa + ".");
        document.getElementById("reiniciar").removeAttribute("disabled"); //habilitar o botão de reiniciar
    }
    else {
        if (palpite > numeroSecreto) {
           exibirNaTela ("p", "O número secreto é menor que " + palpite)
        }
        else {
            exibirNaTela ("p", "O número secreto é maior que " + palpite)

        }

    tentativas++;
    console.log ("tentativas: " + tentativas)
    limparCampo();
    }
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    console.log ("Número secreto reiniciado:", numeroSecreto); //Exibição do novo número secreto no console para teste
    document.getElementById("reiniciar").setAttribute("disabled", true); //desabilitar o botão de reiniciar
}