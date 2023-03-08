//Código do ator
let xAtor = 55;
let yAtor = 370;
let wAtor = 25;
let hAtor = 25;
let colisao = false;
let meusPontos = 0;

//Função que mostra o ator na tela
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, wAtor, hAtor);
}

//Função para movimentar o ator na tela usando as teclas
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 10)
    if(colisao){
       voltaAtorPosicaoInicial();
          somDaColisao.play();
       if(pontosMaiorQueZero()){
         meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function inclcuiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
  fill(color(75,0,130));
  stroke(75)
}

function marcaPonto(){
  if(yAtor < 13){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
     }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}