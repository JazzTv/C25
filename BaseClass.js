class BaseClass
{
    constructor(xpos,ypos,width1, height1, angle1)
   {
     
    //  var box_options = {restitution:1}
     var box_options = {
      'restitution':0.8,
      'friction':1.2,
      'density':1.0
  }
     this.body = Bodies.rectangle(xpos,ypos,width1,height1,box_options);
     this.width = width1;
     this.height = height1;
     this.image = loadImage("sprites/base.png")
     World.add(world,this.body);

   }
  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;
    
    push();
        translate(position.x,position.y)
        imageMode(CENTER);
        rotate(angle)
        image(this.image,0,0,this.width,this.height)
    pop();
  }

}
