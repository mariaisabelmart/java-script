//usando prompt (convertido para número), para que o usuário possa entrar com um valor, e verificar se é aprovado ou não

let valorProduto = Number(prompt('Entre com o valor do produto: R$ '));

if (valorProduto >= 20) {
    document.getElementById('result').innerHTML = 'Aprovado!'
}
else {
    document.getElementById('result').innerHTML = 'Reprovado!'
}
