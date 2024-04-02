//o constructor é outra forma de criar objetos, mas com código menor, sem precisar adicionar um nome ao objeto nem return

function CriarLivros(titulo, autor, paginas) {
    this.tituloLivro = titulo;
    this.autorLivro = autor;
    this.paginasLivro = paginas
}

const book1 = new CriarLivros('Tal Coisa', 'Ciclano', 100);

console.log(book1)