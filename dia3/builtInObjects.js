//built in Objects são objetos já construídos no JS. É possível encontrá-los nas documentações pesquisando por eles. 


//ex.: Math

console.log(Math.max(2,7,15,28,3,9,10)); //retornar o número maior

console.log(Math.min(2,7,15,28,3,9,10)); //retornar o número menor

console.log(Math.round(5.7)); //aproximar valor

console.log(Math.round(Math.PI)); //valor do PI (usando também o  aproximar valor)


//ex.: String

let mensagem = 'Oi, meu nome é Maria';

console.log(mensagem.startsWith('Oi')); //a mensagem começa com oi? True

console.log(mensagem.length); //quantidade de caracteres na mensagem

console.log(mensagem.includes('is')); //mensagem inclui "is"? False

console.log(mensagem.endsWith('ria')); //mensagem termina com Maria? True