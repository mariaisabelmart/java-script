//os OBJETOS são como um conjunto de variáveis agrupadas, quando elas dizem respeito a um mesmo item. O FACTORY é como um conjunto de objetos agrupados, quando eles dizem respeito a um mesmo tema também.
//FACTORY é uma função para criar objetos

function criarLivro(titulo,autor,paginas) {
    const livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        paginasLivro: paginas
    }
    return livro 
}

let primLivro = criarLivro('Moby Dick', 'Herman Melville', 737);
let segLivro = criarLivro('Flores para Algernon', 'Daniel Keyes', 311);

console.log(primLivro);
console.log(segLivro);


//adicionando propriedades a um objeto já existente

primLivro.cor = 'white';

//alterando propriedade
primLivro.paginasLivro = 700;

console.log(primLivro)