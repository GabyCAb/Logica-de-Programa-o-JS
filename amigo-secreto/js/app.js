console.log ("Feito por GabiAbreu, 2026");

let amigos = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo");

    const regex = /^[a-zA-Z\s]+$/; // Expressão regular para validar apenas letras e espaços
    
    if (nome.value == "") {
        alert("Por favor, insira um nome!");
        return;
    }

    if (!regex.test(nome.value)) {
        alert("Por favor, insira um nome válido (apenas letras e espaços)!");
        return;
    }

    if (amigos.includes(nome.value)) {
        alert("Nome já foi adicionado!");
        return;
    }

    let lista = document.getElementById("lista-amigos");
    amigos.push(nome.value);

    if (lista.textContent == "") {
        lista.textContent = nome.value;
    }
    else {
        lista.innerHTML += "<br>" + nome.value;
    }
}

function sortear() {
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para sortear!");
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
        } 
        else {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
        }
    }
}

function embaralhar(lista) {
    // Embaralha a lista de amigos, algoritmo de Fisher-Yates
    for (let i = lista.length; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [lista[i-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i-1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
