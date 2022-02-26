class Bob{
    constructor(x, y, r){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.r = r;
        this.x = x;
        this.y = y; 
        this.bob = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.bob);
    }
    display(){
        var pos = this.bob.position;

        push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
		pop();
    }
}