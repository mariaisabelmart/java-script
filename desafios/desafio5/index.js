const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Orange', 'Pink'];
const botaoCores = document.getElementById('ibotaoCor'); //armazenar ação
const corRan = document.querySelector('.cor'); //query selector é para pegar o primeiro item gerado e retornar a .cor

//quando ocorrer click no botaoCores, fazer a função
botaoCores.addEventListener('click', function() {
    const corRandomica = gerarCorRandomica();
    document.body.style.background = cores[corRandomica]; //mudar o estilo do background do body
    corRan.textContent = cores[corRandomica]; //manipular texto
});


function gerarCorRandomica () { //gerar cores (números) randomicas pelos index do array
    return Math.floor(Math.random() * cores.length);
}

