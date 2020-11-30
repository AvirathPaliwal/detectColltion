class Mango{
    constructor(x,y,r){
   var position = {
     isStatic:true,
     restitution:0,
     friction:1,
   }
  this.r=r
  this.y=y
  this.x=x
  this.image=loadImage("mango.png")
  this.body=Bodies.circle(this.r,this.y,this.x,position)
  World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        imageMode(CENTER)
        
       ellipse(1050,350,10,10);
       ellipse(1150,400,10,10);
       ellipse(1250,250,10,10);
       image(this.image,1050,350,50,50);
        image(this.image,1150,400,50,50);
        image(this.image,1250,250,50,50);

    }
}