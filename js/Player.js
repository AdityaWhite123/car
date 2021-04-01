class Player{
    constructor(){
       this.index=null
       this.name=null
       this.distance=0
    }
    getPlayerCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        });


    }
    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    updatePlayerDetails(){
        var playerNode="players/player"+this.index
        database.ref(playerNode).set({
            name:this.name,
            distance:this.distance
        });
    }
    
    static getAllPlayers(){
        database.ref("players").on("value",function(data){
            allPlayers=data.val();

        });


      
    }

}