//ARGUMENTOS EM FUNÇÕES

//Dessa forma, a função busca os parâmetros na própria chamada dela, sem necessidade de definir quantos serão, para isso, utiliza um for.

function preco () {
    total = 0
    for (let valor of arguments) {
        total += valor
    }
    return total
}

console.log(preco(10,20,30,40,50));


//CONFIGURANDO PARÂMETROS DEFAULT

//Ou seja, passo os valores dos parâmetros direto na função. Interessante para quando são valores fixos, que não vão ficar sendo alterados sempre que a função for utilizada.

function emprestimo (valor, taxa = 2.9, anos = 5){
    return (valor * (taxa / 100) * anos) + valor
}

console.log(emprestimo(20000));


