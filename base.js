class BaseClass{

constructor(x,y,width,height,angle){
  var opt={
      restitution : 0.6,
      friction : 1.2,
      density : 1
  }
    this.body=Bodies.rectangle(x,y,width,height,opt);
    this.width=width;
    this.height=height;

    this.image=loadImage("sprites/base.png");


    World.add(world, this.body);



}

display(){
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
pop();
}









}