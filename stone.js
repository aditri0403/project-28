class stone {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage ("stone.png");
        World.add(world,this.body);
    }
    display(){
       imageMode(CENTER);
       image (this.image,this.body.position.x, this.body.position.y, 20, 20);
    }
};
