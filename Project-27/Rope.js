class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
            this.offsetY=offsetY      
        var options = {
            body1: body1,
            body2: body2,
            stiffness: 1,
            length: 351
        }
        this.body2 = body2
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.body1.position;
            var pointB = this.body2.position;
            push();
            
            stroke(48,22,8);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
           
            
            pop();
        }
    }
    
}