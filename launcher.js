class launcher {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.4
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = bodyA;
    }
    fly(){
        this.launcher.bodyA = null;
    }
   
    display(){
        if(this.launcher.bodyA){
        var posA = this.launcher.bodyA.position;
        var posB = this.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
};
