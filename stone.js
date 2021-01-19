class Stone{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.Body = Bodies.rectangle(170,500,50,40);
        World .add(world,this.Body);
        this.image = loadImage("SPRITES/stone.png");
    }
    display(){
        image (this.image,170,500,50,40);
    }
}