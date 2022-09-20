//Código do ator
let xAtor = 100;
let yAtor = 366;
let wAtor = 30;
let hAtor = 30;

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
    yAtor += 3;
  }
}