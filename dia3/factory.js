//os objetos são como um conjunto de variáveis agrupadas, quando elas dizem respeito a um mesmo item. O factory é como um conjunto de objetos agrupados, quando eles dizem respeito a um mesmo tema também.
//Factory é uma função para criar objetos

function criarLivro(titulo,autor,paginas) {
    const livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        paginasLivro: paginas
    }
    return livro 
}

let primLivro = criarLivro('Tal e Tal', 'Fulana', 100);
let segLivro = criarLivro('Coisa e Coisa', 'Ciclano', 200);

console.log(primLivro);
console.log(segLivro);


//adicionando propriedades a um objeto já existente

primLivro.cor = 'vermelho';

//alterando propriedade
primLivro.paginasLivro = 550;

console.log(primLivro)