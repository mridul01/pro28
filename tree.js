class Tree {
    constructor(x,y){
        this.x =x;
        this.y = y;
        this.width = 700;
        this.height = 600;
        
        this.Body = Bodies.rectangle(600,50,700,600,{isStatic:true});
        World.add(world,this.Body);
        
        this.image = loadImage("SPRITES/tree.png");
            }
            display(){
                image (this.image,600,50,700,600);
            }  
}