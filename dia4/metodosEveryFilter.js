//EVERY
//É uma forma de olhar em todo o array, e verificar uma condição

const tempFranca = [25, 27, 30, 20];

const tempPositiva = tempFranca.every(function(valor){
    return valor >= 0
})

console.log(tempPositiva);

/*Ou seja:
Verifique todo o array tempFranca, e retorne verdadeiro caso for inteiramente positivo.
*/

//Em arrow function:

const temperatura = tempFranca.every(valor => valor >= 0);

console.log(temperatura);




//FILTER
//Também é uma forma de olhar em todo o array, e verificar uma condição, mas ele retorna os valores que se encaixam nessa condição
const tempRibeirao = [25,27,32,35];

const tempPos = tempRibeirao.filter(function(value){
    return value >= 0
})

console.log(tempPos);

//Em arrow function:

const temperaturaPos = tempRibeirao.filter(value => value >= 0);

console.log(temperaturaPos);