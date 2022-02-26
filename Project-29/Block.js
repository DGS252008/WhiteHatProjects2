class Block{
    constructor(x, y, width, height) {
        var options = {
            friction: 0.0,
            restitution: 0.4,
            isStatic: false
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        
        World.add(world, this.body);

      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("#3F9795")
        rect(0, 0, this.width, this.height);
        pop();
      }
}