class launcher {
    constructor(BodyA,pointB){
        var options = {
            BodyA : BodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.4
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.BodyA = null;
    }
    display(){
        var posA = this.launcher.BodyA.position;
        var posB = this.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
    }
};
