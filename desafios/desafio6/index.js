let numeroGerado
let numsUsuario = []
let tentativas = 0
let maxTentativas = 10

//Função para botão Novo Jogo (recarregar a página):
function novoJogo() {
    window.location.reload();
}

//Gerar número aleatório
function iniciar() {
    numeroGerado = Math.floor(Math.random() * 100 + 1); //para criar um número randômico até 100 (e não até 99, já que conta o 0)
};

//Função para comparar os números
function compararNums () {
    const numUsuario = Number(document.getElementById('inumberInput').value);
    numsUsuario.push(' ' + numUsuario); //armazenar palpite na array
    document.getElementById('palpites').innerHTML = numsUsuario

    if (tentativas < maxTentativas-1) {
        if (numUsuario >= 0 && numUsuario <= 100) {
            if (numUsuario > numeroGerado) {
                document.getElementById('textoOutput').innerHTML = 'Seu número é muito alto!';
                document.getElementById('inumberInput').value = ''; //limpar o input após enviar o valor
                tentativas++; //marcar tentativas
                document.getElementById('tentativas').innerHTML = tentativas;
            }
            else if (numUsuario < numeroGerado) {
                document.getElementById('textoOutput').innerHTML = 'Seu número é muito baixo!';
                document.getElementById('inumberInput').value = '';
                tentativas++;
                document.getElementById('tentativas').innerHTML = tentativas;
            }
            else {
                document.getElementById('textoOutput').innerHTML = 'Parabéns, você acertou!!!';
                tentativas++;
                document.getElementById('tentativas').innerHTML = tentativas;
                document.getElementById('inumberInput').setAttribute('Readonly','Readonly') //tornar o input somente leitura
            }
        }
        else {
            document.getElementById('textoOutput').innerHTML = 'Digite um número entre 0 e 100';
            document.getElementById('inumberInput').value = '';
            tentativas++;
            document.getElementById('tentativas').innerHTML = tentativas;
        }    
    } 
    else {
        document.getElementById('textoOutput').innerHTML = `Você perdeu! O número era ${numeroGerado}.`;
        document.getElementById('inumberInput').setAttribute('Readonly','Readonly')
    }  
}

