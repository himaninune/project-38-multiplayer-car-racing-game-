var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //image(groundImage, 0, 0, );
  //image(trackImage,)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

function preload(){
  car1_Image = loadImage("images/car1.png");
  car2_Image = loadImage("images/car2.png");
  car3_Image = loadImage("images/car3.png");
  car4_Image = loadImage("images/car4.png");
  groundImage = loadImage("images/ground.png");
  trackImage = loadImage("images/track.jpg");
}
