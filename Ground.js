class Ground 
{
   constructor(xpos,ypos,width,height)
   {
    var ground_options={
                          isStatic:true
                       }
       this.body = Bodies.rectangle(xpos,ypos,width,height,ground_options);
       World.add(world,this.body);
       this.width = width;
       this.height = height;
      // this.image = loadImage("sprites/ground.png")
   }

   display ()
   {
       var positions = this.body.position;

       rectMode(CENTER);
       rect(this.image,positions.x,positions.y,this.width,this.height);
   }
}