let botao = document.getElementById('botao');
botao.onclick = selecao;

function selecao() {
    var tipo = document.getElementById('tipos');
    var texto = tipo.options[tipo.selectedIndex].text;
    
    // Verifica o tipo selecionado e chama a função correspondente
    if (texto === "Não Importante, mas Urgente") {
        adicionarElemento('.caixa1');
    } else if (texto === "Importante, mas Não Urgente") {
        adicionarElemento('.caixa2');
    } else if (texto === "Importante e Urgente") {
        adicionarElemento('.caixa3');
    } else if (texto === "Não Importante e Não Urgente") {
        adicionarElemento('.caixa4');
    }
}

function adicionarElemento(caixaSelector) {
    var input = document.getElementById('input').value;
    var caixa = document.querySelector(caixaSelector); // Seleciona a caixa correta
    var pa = document.createElement('p');
    pa.textContent = input;
    caixa.appendChild(pa); // Adiciona o parágrafo à caixa selecionada
    
    document.getElementById('input').value = ''; // Limpa o input após adicionar
}
