let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    // Valida entrada, se o campo de texto está vazio
    if (nome.trim() === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    
    listaDeAmigos.push(nome);
    exibirLista();
    limparCampo();
}

function exibirLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista para evitar duplicatas
    
    listaDeAmigos.forEach(amigo => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    // Valida entrada - verifica se a lista tem pelo menos dois nomes para o sorteio
    if (listaDeAmigos.length < 2) {
        alert('Adicione mais de 1 amigo para fazer o sorteio.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<h2>O amigo sorteado é: ${amigoSorteado}!</h2>`;
}
