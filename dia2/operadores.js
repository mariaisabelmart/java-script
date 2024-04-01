// Operadores Aritméticos: + - * / % **

let num1 = 3;
let num2 = 2;
let total = num1 + num2;

//Adição:
console.log(num1 + num2);

//Subtração:
console.log(num1 - num2);

//Multiplicação:
console.log(num1 * num2);

//Divisão:
console.log(num1 / num2);

//Resto da divisão:
console.log(num1 % num2);

//Exponencial:
console.log(num1 ** num2);

//Incremento (++): adicionar 1
console.log(++total); //como o ++ foi colocado antes do total, ele vai adicionar e depois mostrar. Se fosse depois, ele ia primeiro mostrar e só depois adicionar.

//Decremento (--): reduzir 1. A ordem causa a mesma consequência do ++
console.log(--total);



//Operadores de Atribuição: += -= *= /=
console.log(num1 += 20); //23 



//Operadores de Comparação: < > <= >= == === !==
console.log(1 > 0);
console.log(1 < 0);
console.log(1 >= 3);
console.log(1 <= 3);
console.log(1 == '1');
console.log(1 === '1');
console.log(1 !== '1');



//Operadores ternários ?:
let motorista = 90;
let velocidade = motorista > 110 ? 'Acima' : 'Abaixo';
console.log(velocidade);
//na variável velocidade, se a velocidade do motorista for maior que 110, mostre o "verdadeiro" acima, se não, mostre o "falso" abaixo




//Operadores Lógicos: and(&&), or(||), not(!)
let temIdadeMinima = true
let temTituloEleitor = false

let podevotar = temIdadeMinima && temTituloEleitor
console.log(podevotar)

let talvezPode = temIdadeMinima || temTituloEleitor
console.log(talvezPode)

let podeVotarNot = temIdadeMinima && temTituloEleitor
console.log(!podeVotarNot)

//outro exemplo:
let idadeMin = true
let tituloEleitor = true

let podeVotar = idadeMin && tituloEleitor
console.log('Pode votar: ' + podeVotar)

let podeViajar = !podeVotar
console.log('Pode viajar: ' + podeViajar)

//com string
let corCliente = 'branco';
let corEstoque = 'preto';
let corVendida = corCliente || corEstoque;

console.log(corVendida);

//o or da prioridade pela ordem para dar a resposta (esquerda p/ direita), mas se a corCliente fosse undefined, ele iria para o preto, que é a primeira definida apresentada