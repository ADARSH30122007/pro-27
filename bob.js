class Bob{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8

        }
		
		this.body=Bodies.circle(x,y,25, options)
		World.add(world, this.body);
	   
		
	}


display(){
   		

    push();
    translate(paperpos.x, paperpos.y);
    ellipseMode(RADIUS);
    fill(254,0,255);
    ellipse(this.body.POSITION.X,THIS.BODY.POSITION.Y,25,25);
    pop();
}
}