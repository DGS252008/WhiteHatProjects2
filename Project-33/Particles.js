class Particles{
    constructor(x, y, r){
        var options= {
            isStatic = false,
            restitution = 0.01,
            density = 1.2,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(random(0,255), random(0, 255), random(0, 255));
        ellipse(pos.x, pos.y, this.r);
    }
}