class Ground {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(650,660,1300,20);
    }
}