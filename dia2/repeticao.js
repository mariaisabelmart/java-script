//repetição

//for (para): para i começando no 0, enquanto i for menor ou igual a 10, acrescente +1 ao i
//A variável i é iniciada dentro do loop

for (i = 0; i <= 10; i++) {
    console.log('Número: ', i)
}

//exemplo: tabuada do 2:

for (j = 0; j <= 10; j++) {
    console.log('2 x ', j, ' = ', (2 * j))
}




//while (enquanto):
//A variável é iniciada fora do loop, possibilitando reutilizar variável
//o loop verifica a condição antes de fazer
p = 0;

while (p <= 10) {
    console.log('Número', p)
    p++
}




//do while (faça enquanto):
//A variável também é iniciada fora do loop
//o loop verifica a condição depois de fazer

a = 0;

do {
    console.log('Número é', a);
    a++
} while (a <= 10)




//for in loop (for com objeto):
//a variável contador vai percorrer as propriedades dentro de um objeto

const meuCarro = {
    modelo: 'BMW', //cont b 1
    ano: 2023, //cont b 2
    cor: 'preto' //cont b 3
}

for (let b in meuCarro) {
    console.log(b, meuCarro[b]) //vai mostrar qual propriedade está na posição b e seu valor. Acabando as propriedades, acaba o loop
}




//for of loop (for com array):
//troca o in pelo of. Isso faz com que o loop entenda que é para mostrar não o índice de, mas dentro de. 

const amigos = ['Ana', 'Maria', 'José'];

for (let m of amigos){
    console.log(m)
}




//Usando break para parar um loop

let x = 0;

while (x <= 10) {
    if (x === 8) break //enquanto x <= 10, faça.....mas se x === 8, pare
    console.log('Número', x);
    x++
}



