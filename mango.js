class mango {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1
        }
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image (this.image,this.body.position.x, this.body.position.y, 20, 20);
       
    }
};