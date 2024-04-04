//o CONSTRUCTOR é outra forma de criar objetos, mas com código menor, sem precisar adicionar um nome ao objeto nem return

function CriarLivros(titulo, autor, paginas) {
    this.tituloLivro = titulo;
    this.autorLivro = autor;
    this.paginasLivro = paginas
}

const book1 = new CriarLivros('Moby Dick', 'Herman Melville', 737);

console.log(book1)