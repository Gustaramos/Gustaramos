//Código de dimensões e posição do carro
let larguraCarros = 60;
let alturaCarros = 45;

//Lista para controle de variavel dos carros.
let velocidadeCarros = [2, 3, 5, 1, 8, 6]
let yCarros = [38, 94, 147, 208, 260, 310]
let xCarros = [600, 600, 600, 600, 600, 600];

//Função que mostra o carro na tela
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
  }
}

//Função que movimanta o carro
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

//Função 
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){ //Enquanto i for menor que tamanho da lista de variavel xCarros, repetir a aparição inicial dos carros.
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -55;
}
