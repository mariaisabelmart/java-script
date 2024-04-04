//usar TEMPLATE é utilizar crase em vez de aspas para que o conteúdo apareça da forma que escreveu, e ${} para variáveis

const email = 'Oi José, \nA reunião está confirmada. \nMaria.';
//aqui é necessário utilizar \n para quebrar linhas
console.log(email);



//com template:
const email2 = `Oi José, 
A reunião está confirmada.
Maria.`
console.log(email2);


//template com variável

let nome = 'José';
const email3 = `Oi ${nome},
A reunião está confirmada.
Maria.`
console.log(email3)