class log extends BaseClass
{
    constructor(xpos,ypos,height,angle)
    {   
        super (xpos,ypos,20,height,angle)
        Matter.Body.setAngle (this.body,angle);
        this.image = loadImage("sprites/wood2.png")

    } 
}