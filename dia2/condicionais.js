//Condicionais:
 
//if else (se senão)

 let velocMax = 110;
 let velocMin = 55;
 let velocMotorista = 80;

 if (velocMotorista > velocMax) {
    console.log('Muito rápido');
 }
 else if (velocMotorista <= velocMax && velocMotorista >= velocMin) {
    console.log('Bom');
 }
 else {
    console.log('Muito devagar');
 }



//Switch Case (escolha caso)
//escolha na variável. Caso seja "x" faça isso, caso seja "y" faça aquilo. 
//o break é para parar assim que encontrar o valor 
//o default é o que fará se não tiver o valor procurado

let aeroporto = 'SEA';

switch (aeroporto) {
    case 'MCO':
        console.log('Orlando');
        break
    case 'JFK':
        console.log('John F. Kennedy');
        break
    case 'SEA':
        console.log('Seattle');
        break
    default:
        console.log('Não existe');            
}


