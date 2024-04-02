//POO: programação orientada a objetos

//Objetos: possuem um conjunto de propriedades (sobre um mesmo item) agrupadas, em vez de criar diversas variáveis separadas. Possuem propriedades (o que tem nele) e métodos (o que podemos fazer com ele)

//Pode ser let ou const

const livro = {
    titulo: 'Perto do coração selvagem',
    autor: 'Clarice Lispector',
    paginas: 211,
    partes: {
        primeiraParte: 'Capítulo 1-9',
        segundaParte: 'Capítulo 10-19'
    }
}

console.log(livro) //mostrar objeto




//usar função dentro de objeto: quando uma função está ligada a um objeto, é possível colocá-la dentro dele
//Geralmente é colocada no final

const livro2 = {
    titulo: 'taltal',
    autor: 'fulano',
    paginas: 100,
    partes: {
        primeiraParte: 'Parte 01',
        segundaParte: 'Parte 02'
    },
    imprimirLivro: function() {
        console.log('Imprimindo...')
    }
}

livro2.imprimirLivro() //chamar função