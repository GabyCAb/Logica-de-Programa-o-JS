console.log ('Projeto Alugames');
console.log ('Feito por Gabi Abreu');

function alterarStatus(id) {
    let clique = document.getElementById(`game-${id}`);
    let imagem = clique.querySelector('.dashboard__item__img');
    let botao = clique.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (!confirm('Deseja realmente devolver este jogo?')) {
            return;
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert ('Jogo devolvido com sucesso!');
    }
    else {
        if (!confirm('Deseja realmente alugar este jogo?')) {
            return;
        }
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert ('Jogo alugado com sucesso!');
    }
}