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

      this.Visibility = 255;
    }
    display(){
     if(this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle)
      rectMode(CENTER);
      fill("#BE97C6")
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
        World.remove(world, this.body); 
        push();
        this.Visibility = this.Visibility -5; 
        pop();
     }
    }


    score(){
      if (this.Visibility < 0 && this.Visibility >-105){
        score++;
      }
    }
}