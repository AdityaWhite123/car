class Game{
    constructor(){

    }
    getGameState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
           gameState=data.val(); 
        })

       
    }
    updateGameState(state){
        database.ref("/").update({
            gameState:state

        });
    }
    async start(){
        if(gameState===0){
        playerObj=new Player();

        var pcref=await database.ref("playerCount").once("value");

        if(pcref.exists()){
            playerCount=pcref.val();
            playerObj.getPlayerCount();

        }
       
        formObj=new Form();
        formObj.display();
        }
        car1=createSprite(200,200);
        car2=createSprite(400,200);
        car3=createSprite(600,200);
        car4=createSprite(800,200);
      cars=[car1,car2,car3,car4];
        
        
        

    }
    play(){
        formObj.hide();
        Player.getAllPlayers();
        if(allPlayers){
            var y
            var x=200;
            var i=0
            for(var plr in allPlayers){
                cars[i].x=x
                y=height-allPlayers[plr].distance;  
                cars[i].y=y  

                if(plr==="player"+ playerObj.index)
                {
                   camera.position.x=width/2
                   camera.position.y=cars[i].y
                }
                else {fill("black")}
              x=x+200;
              i=i+1;


            }
            if(keyDown(UP_ARROW))
            {
               playerObj.distance=playerObj.distance+20;
              playerObj.updatePlayerDetails();
            }
        }
        drawSprites();
    }
    
}