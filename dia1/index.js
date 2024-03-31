//Finalizar com ; é opcional, mas tem momentos que pode ser necessário.

//No JS letra maiúscula e minúscula tem diferença (Case Sensitive).




//console.log ('' ou "")é para mostrar algo na tela.
console.log('Olá mundo!'); 




/*variáveis e constantes: 
    var caiu em desuso. Usar let.
    Evitar usar _, e sim letra maiúscula para diferenciar primeira palavra do nome da variável, da segunda palavra (ex.: corCasa).
    Usar nomes com semântica.

    O valor de variáveis pode ser alterado no programa, já de constantes (const) não pode. 
*/
let firstname = 'Maria';
let lastname = 'Martins';
console.log(firstname,lastname); //Mostrar variáveis

const price = 10;
console.log(price); //Mostrar constante



/*Tipos de variáveis:
    JS é dinâmico, ele detecta o tipo de variável pelo valor.Não precisa escrever de qual tipo ela é .
    Primitivo:    
        string
        number
        boolean
        undefined
        null
    Referência: 
        object
        array
        function   
*/

let nomeItem = 'caderno'; //string
let precoItem = 30; //number
let disponivelItem = true; //boolean (true ou false)
let corItem; //undefined (não associei valor, ou colocar "= undefined )
nomeItem = null; //null (caso queira por exemplo "limpar" uma variável para utilizá-la depois)

//É possível ver de qual tipo é uma variável:
console.log(typeof precoItem);




//Objetos: são compostos por vários itens (propriedades)
    /*let nomeAluno = 'Maria';
    let sobrenomeAluno = 'Martins';
    let idadeAluno = 23;
    let corFavorita = 'Amarelo';
    let estudante = true;*/

let aluno = {
    nomeAluno: 'Maria',
    sobrenomeAluno: 'Martins',
    idadeAluno: 23,
    corFavorita: 'Amarelo',
    estudante: true,
    aprovada: true
};

aluno.corFavorita = 'Verde'; //alterar uma propriedade do objeto.
console.log(aluno.corFavorita); //mostrar só uma propriedade do objeto.
console.log(aluno); //mostrar objeto aluno.




/*Array: para guardar uma lista de objetos dentro de uma variável, seja string, number, boolean, etc.
    Organizado em posições de 0 até a última posição (índice). */  

let amigos = ['fulano', 'ciclano', 'fulano2', 'ciclano2'];

amigos[2] = 'maria' //alterar um item do array.
console.log(amigos[2]); //mostrar um item no índice 2.
console.log(amigos); //mostrar todo o array.




//Funções: conjunto de instruções/tarefas para usar várias vezes com mais facilidade.

//Função sem parâmetro
function statusVenda1 () { //função para mostrar uma frase
    console.log('Aprovada!');
}

statusVenda1(); //chamando a função para executar


//Função com parâmetro
function statusVenda2 (status) { //(parâmetro)
    console.log('Venda ' + status);
}

statusVenda2('Aprovada'); //(argumento)


//Função com mais de um parâmetro
function statusVenda3(status, valor) {
    console.log('Venda ' + status + '. Valor total: R$' + valor);
}

statusVenda3('Aprovada ', 10);

//Função com cálculo matemático (com return) e mostrando o resultado
function porcentagem(valor) {
    return valor - (valor * (10/100));
}
console.log(porcentagem(100));

//ou

/*let total = porcentagem(100);
    console.log(total);*/
