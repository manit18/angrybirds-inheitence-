class log extends BaseClass{
constructor(x,y,height,angle){

//this.body=Bodies.rectangle(x,y,width,height,opt);
    super(x,y,20,height,angle);
    

    this.image=loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
}
/*display(){
   
        super.display();
}*/

}
