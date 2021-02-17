var  database,player,form,game,playerCount;
var gameState = 0;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start();

  
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}


