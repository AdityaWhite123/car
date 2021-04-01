var gameObj;
var playerObj;
var formObj;
var database;
var playerCount;
var gameState=0;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){

    createCanvas(displayWidth-45,displayHeight-140);
    database=firebase.database();
gameObj=new Game();
gameObj.getGameState();
gameObj.start();
}

function draw(){
    if(playerCount==4)
    {
       gameObj.updateGameState(1);
        console.log(gameState);
    }
    if(gameState==1)
    {
       clear();
        gameObj.play();
    }
    
}

    
