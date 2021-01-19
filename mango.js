class Mango {
    constructor(x,y){
        var options ={
            isStatic : true,
            restitution : 0,
            friction :1
        }
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.Body = Bodies.rectangle(x,y,60,70,options);
        World.add(world,this.Body);
        
        this.image = loadImage("SPRITES/mango.png");
            }
            display(){
                image (this.image,this.x , this.y , 60,70);
            }  
}