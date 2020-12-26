class Box 
{
  constructor(x,y,width,height)
  {
    var options = 
    {
      'restitution':0.3,
      'friction':0.6,
      'density':1.0,
     // 'isStatic':true
    }

    this.image = loadImage('water bottle.png');
    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width/2.2,height+5,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display() 
  {
    if (this.body.speed<3){      
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
  //    stroke("black");
    //  strokeWeight(4);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else 
    {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  }
  score() 
  {
    if (this.visibility < 0 && this.visibility > -1005) 
    {
      score++;
    }
  }
}