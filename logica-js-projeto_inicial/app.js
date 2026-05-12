alert("Bem-vindo ao Jogo do Número Secreto!");

console.log("Jogo do Número Secreto - Adaptado por Gabi Abreu"); // Apenas para fins de teste

let numeroMaximo = 100; // Define o número máximo para o jogo

let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // Gera um número aleatório entre 1 e numeroMaximo
console.log("Número Secreto (para teste): " + numeroSecreto); // Apenas para fins de teste

let palpite; // Variável para armazenar o palpite do usuário

let tentativas = 0; // Contador de tentativas

while (palpite != numeroSecreto) {
    palpite = parseInt(prompt("O número secreto está entre 1 e " + numeroMaximo + "." + "\n" + "Digite seu palpite:"));
    
    if (palpite == numeroSecreto) {
        break; // Sai do loop
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é maior do que " + palpite + ". Tente novamente!");
    } else {
        alert("O número secreto é menor do que " + palpite + ". Tente novamente!");
    }

    tentativas++; // Incrementa o contador de tentativas
    console.log("Tentativa " + tentativas + ": " + palpite); // Apenas para fins de teste
}

tentativas++; // Incrementa a última tentativa que acertou o número secreto

alert(" ✶ Parabéns! ✶" + "\n" + "✶ Você acertou! ✶ ");
console.log("Tentativa " + tentativas + ": " + palpite); // Apenas para fins de teste