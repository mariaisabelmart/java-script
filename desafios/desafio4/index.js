//1º passo: puxar as variáveis do HTML;
//2º passo: fazer cálculos;
//3º passo: retornar valores ao HTML;

function formatarReais (valor) {
    valor = Math.ceil(valor * 100) / 100; //arredondar p/ mais o último dígito
    valor = valor.toFixed(2); //mostrar só 2 casas depois da vírgula
    return valor;
};

function pessoaPlural (valor) { //mostrar plural ou singular na quantidade de pessoas
    if (valor == 1) {
        return valor + ' pessoa';
    } else return valor + ' pessoas';     
}

function update() {
    let conta = Number(document.getElementById('ivalorTotal').value);
    let percGorjeta = document.getElementById('ibarraPerc').value;
    let divisao = document.getElementById('idivisao').value;
    
    let valorGorjeta = conta * (percGorjeta / 100);
    let valorTotal = conta + valorGorjeta;
    let valorCada = valorTotal / divisao;

    document.getElementById('percGorjeta').innerHTML = percGorjeta + '%'; //fazendo aparecer a porcentagem conforme arrasta o range

    document.getElementById('valorGorjeta').innerHTML = "R$" + formatarReais(valorGorjeta);

    document.getElementById('resultTotal').innerHTML = "R$" + formatarReais(valorTotal);

    document.getElementById('valorDivisao').innerHTML = pessoaPlural(divisao);

    document.getElementById('valorCada').innerHTML = "R$" + formatarReais(valorCada);
};