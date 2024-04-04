//ADICIONANDO ITENS NA ARRAY:
const numeros = [7,8,9];

//No final:
numeros.push(10,11,12);

//No começo:
numeros.unshift(1,2,3);

//No meio:
numeros.splice(3,0,4,5,6)

//Obs: para adicionar no meio, deve ser informado primeiro a posição onde começará a adiconar (3); quantos valores deletar (0), e só depois os valores a adicionar(4,5,6).

console.log(numeros);




//PROCURANDO VALOR NA ARRAY PRIMITIVA:
const valores = [6,7,8,9];

//retornando a posição do 8(-1 se não existir):
console.log(valores.indexOf(8));

//retornando true ou false (se 5 existe no array):
console.log(valores.includes(5));




//PROCURANDO VALOR NA ARRAY DE REFERÊNCIA:
//obs: Array referência é quando há várias informações sobre um mesmo item dentro da array, passando a ser referências.

const filmesFav = [
    {id: 1, nomeFilme: 'Matrix'},
    {id: 2, nomeFilme: 'O Sexto Sentido'},
    {id: 3, nomeFilme: 'Interestelar'}
]

console.log(filmesFav.find(function(filme){
    return filme.nomeFilme === 'Matrix';
}))
//find só funciona com função
//Nesta função: me mostre os dados do filme, com base em filmesFav, através da função (parâmetro filme) de busca, retornando o filmesFav com nomeFilme igual a 'Matrix'
//Se não encontrar o que está buscando, retorna Undefined




//REMOVENDO VALORES DA ARRAY:
const nums = [5,6,7,8,9];

//Do final:
const final = nums.pop(); //remove o último valor da array (e retorna ele)
console.log(final) //9
console.log(nums) //5,6,7,8

//Do início
const inicio = nums.shift(); //remove o primeiro valor da array (e retorna ele)
console.log(inicio) //5
console.log(nums) //6,7,8

//Do meio: é parecido com adicionar, mas sem passar o último parâmetro (os valores a adicionar)
const meio = nums.splice(1,1); //remove a partir da posição informada, a quantidade de valores informada, e retorna esses valores
console.log(meio);//7
console.log(nums);//6,8




//LIMPANDO A ARRAY: obs: array let para poder ser alterada

//1ª forma: falar que a array é vazia
let array1 = [5,6,7,8];
array1 = [];

console.log(array1);

//2ª forma: falar que a array tem tamanho 0
let array2 = [5,6,7,8];
array2.length = 0;

console.log(array2);

//3ª forma: remover todos os valores da array com splice (da posição 0 até a última)
let array3 = [5,6,7,8];
array3.splice(0, array3.length);

console.log(array3);




//CONCATENAR ARRAY:
let numeros2 = [1,2,3];
let letras = ['a','b','c'];

todos = numeros2.concat(letras); 
console.log(todos);




//DIVIDIR ARRAY:
parte = todos.slice(2,4); //pegar da posição 2, até o 4º item da array
console.log(parte);




//TROCAR AS VÍRGULAS da array por algo (pode ser utilizado simplesmente para transformar uma array em string) - (Join)

let clientes = ['Andre', 'Maria', 'Marcel'];

let clientesJoin = clientes.join('a');

console.log(clientesJoin); //AndreaMariaaMarcel

//Outro exemplo:
let vendedores = ['Andre', 'Maria', 'Marcel'];

let vendedoresJoin = vendedores.join(', ');

console.log(vendedoresJoin);




//ORDENANDO ARRAY:
let funcionarios = ['Andre', 'Maria', 'João', 'Arnaldo'];

funcionarios.sort()
console.log(funcionarios)

//Invertendo uma array
funcionarios.reverse()
console.log(funcionarios)

