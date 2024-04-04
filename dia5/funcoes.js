//Existem dois tipos de funções:

//FUNCTION DECLARATION: a função tem um nome

function filme() {
    console.log('Interestelar');
}

filme() //chamando a função


//FUNCTION EXPRESSION: a função não tem um nome, mas é atribuída a uma variável

const carro = function() {
    console.log('Fusca');
}

carro() //chamando a função

//nesta segunda forma, ela pode ser chamada por outros pontos também

automovel = carro

automovel()


//OBS: HOISTING: 
//Na forma FUNCTION DECLARATION, não importa a ordem (função, chamar função), porque o JS tem o HOISTING, ou seja, é como se ele "jogasse" as funções para cima do código, então já as lê antes de ler a chamada;
//Na forma FUNCTION EXPRESSION, isso não acontece, sendo necessário escrever primeiro a função, e só depois chamá-la no código.
