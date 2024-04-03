//Arrow Function, é uma função escrita em forma resumida

const filme = [
    {id:1, nomeFilme: 'Matrix'},
    {id:2, nomeFilme: 'O Sexto Sentido'},
    {id:3, nomeFilme: 'Interestelar'}
]

console.log(filme.find(paramFilme => paramFilme.id === 2
));

//na arrow function, continua havendo o parâmetro. Porém, não é necessário escrever "function", nem colocar o parâmetro entre (), nem escrever o "return", visto que o "=>" já equivale a function() { return }