class Ground {
 constructor(x,y,width,height){
 var opt = {
     isStatic : true
 }
 this.body=Bodies.rectangle(x,y,width,height, opt);
 this.width=width;
 this.height=height;

 World.add(world,this.body);


 }
display(){
var p=this.body.position;

rectMode(CENTER);
fill("brown");
rect(p.x,p.y,this.width,this.height);

}



}
