class Particle{
    constructor(x,y){
        var options={
            isStatic : false
        }
        this.body = Bodies.circle(x,y,12,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,12,12);
    }
}