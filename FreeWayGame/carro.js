//Código de dimensões e posição do carro
let larguraCarros = 60;
let alturaCarros = 45;

//Carro 1
let xCarro1 = 600;
let yCarro1 = 38;
let velocidadeCarro1 = 2;

//Carro 2
let xCarro2 = 600;
let yCarro2 = 94;
let velocidadeCarro2 = 3;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 315;
let velocidadeCarro3 = 5

//Função que mostra o carro na tela
function mostraCarro(){
  image(imagemCarro, xCarro1, yCarro1, larguraCarros, alturaCarros);
  image(imagemCarro2, xCarro2, yCarro2, larguraCarros, alturaCarros);
  image(imagemCarro3, xCarro3, yCarro3, larguraCarros, alturaCarros);
}

//Função que movimanta o carro
function movimentaCarro(){
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialDoCarro(){
  if(xCarro1 < -55){
    xCarro1 = 600;  
  }
  if(xCarro2 < -55){
    xCarro2 = 600;
  }
  if(xCarro3 < -55){
    xCarro3 = 600;
  }
}