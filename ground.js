class Ground{
constructor(x,y,width,height){
    var option={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    fill(255);  
}
display(){
   var poss=this.body.position;
    rectMode(CENTER);

rect(poss.x,poss.y,this.width,this,height);

}
}