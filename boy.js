class Boy {
    constructor(x,y){
this.x =x;
this.y = y;
this.width = 200;
this.height = 400;


this.Body = Bodies.rectangle(150,350,200,400,{isStatic:true});
World.add(world,this.Body);

this.image = loadImage("SPRITES/boy.png");
    }
    display(){
        image (this.image,150,350,200,400);        
    }
}