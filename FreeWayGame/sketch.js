//Função para determinar tamanho da area de trabalho
function setup() {
  createCanvas(500, 400);
}

//Função para desenhar objetos na tel
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
}