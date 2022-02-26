class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    display(){
        if(this.throw.bodyA){
            var b1 = this.throw.bodyA.position;
            var p1 = this.pointB;
            strokeWeight(4);
            line(b1.x, b1.y, p1.x, p1.y);
        }
    }
    
    fly(){
        this.throw.bodyA = null;
    }
}