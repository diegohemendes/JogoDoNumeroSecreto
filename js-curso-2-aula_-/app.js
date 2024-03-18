let listaDenumerosSoreteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;



function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' ,' Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero Entre 1 e 10');

}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == NumeroSecreto){
       exibirTextoNaTela('h1', 'Acertou!');
       let palavraTentativa = tentativas > 1 ? 'Tentativas': 'Tentativa';
       let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
       exibirTextoNaTela('p', mensagemTentativas );
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > NumeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', ' O numero secreto é maior');
        }
    }   tentativas ++ ;

    limparCampo();


}   
function gerarNumeroAleatorio () {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDenumerosSoreteados.length;
    if  (quantidadeDeElementosNaLista == 3 ) {
        listaDenumerosSoreteados = [];
    }

    if (listaDenumerosSoreteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDenumerosSoreteados.push(numeroEscolhido);
        console.log(listaDenumerosSoreteados);
        return numeroEscolhido;
    }
}

function limparCampo( ) {
    chute = document.querySelector('input');
    chute.value = '';  
}

function reiniciarJogo(){
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
exibirMensagemInicial();