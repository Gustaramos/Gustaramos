//Função para determinar tamanho da area de trabalho
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//Função para desenhar objetos na tel
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  inclcuiPontos();
  marcaPonto();
  pontosMaiorQueZero();
  podeSeMover()
}