//Projeto calculadora simples
function resultado (){
    let num1 = Number(document.getElementById('inum1').value) //recebendo num1 do input
    let num2 = Number(document.getElementById('inum2').value) //recebendo num2 do input
    let total = 0

    if (document.getElementById('iradio1').checked) {
        total = num1 + num2
    }
    else if (document.getElementById('iradio2').checked) {
        total = num1 - num2
    }
    else if (document.getElementById('iradio3').checked) {
        total = num1 / num2
    }
    else {
        total = num1 * num2
    }

    document.getElementById('areaResultado').innerHTML = 'Resultado: ' + String(total) //retornar o resultado na área resultado
}