let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa =  1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = (`Você descobriu o numero secreto, com ${tentativa} ${palavraTentativa} !`);
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
          exibirTextoNaTela('p','O numero secreto é menor');
          
        } else {
          exibirTextoNaTela('p','O numero secreto é  maior');
        }
        tentativa ++
        limparCampo();
    }
}

 function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa =1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled' , true);
}


//.document.querySelect = seleciona um elemento de tro do HTML, dentro das () vaio elemento selecionado.

//.innerHtml = diz o que vai dentro do Elemento Selecionado

// Função é um trecho de codigo que tem uma determinda  ação;
// Estutura função: function variavel(){ aqui dentro vai a açao}
