class Balls{
    constructor(x, y, r){
        var options= {
            isStatic: false,
            restitution: 0.1,
            friction: 2.0,
            density: 1.4
        }
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.body = Matter.Bodies.circle(this.x, this.y, this.r/2, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        //fill("white");
        stroke("white");
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}