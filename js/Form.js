class Form{
    constructor(){
       this.input=createInput("name")
       this.button=createButton("play")
       this.greeting=createElement("h2")
       this.title=createElement("h1")
    }
    display(){
        this.title.html("car Racing Game")
        this.input.position(width/2-30,height/2-30);
        this.title.position(width/2-50,0)
        this.button.position(width/2+45,height/2+25);
        this.button.mousePressed(()=>{
            console.log(this);
            this.input.hide();
            this.button.hide();
            playerObj.name=this.input.value();
            playerCount=playerCount+1;
            playerObj.index=playerCount;
            playerObj.updatePlayerCount(playerCount);
            playerObj.updatePlayerDetails();
            this.greeting.html("welcome "+ playerObj.name);
            this.greeting.position(width/2-35,height/2-45);


        });




    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();

    }
}