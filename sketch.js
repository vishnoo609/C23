const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

let backgroundImg
let tower
let towerImg
let cannon,angle
let cannonball
let balls = []



function preload() {
 backgroundImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  let options = {
    isStatic: true
  }
  
 ground = Bodies.rectangle(width/2,height-10,width,20,options)
 World.add(world,ground)

 tower = Bodies.rectangle(50,200,160,310,options)
 World.add(world,tower)

 angleMode(DEGREES)
 angle = 15
 cannon = new Cannon(160,120,130,100,angle)
 
 
}

function draw() {
  image(backgroundImg, 0,0,width,height)
 
  Engine.update(engine);
  rectMode(CENTER)
  
  rect(ground.position.x, ground.position.y, width,20)
  
  image(towerImg,tower.position.x,tower.position.y,160,300)

  cannon.display()
  for (let i = 0;i<balls.length;i++){
    showCannonballs(balls [i],i)




  }
}

function keyReleased(){
if (keyCode === DOWN_ARROW){
  cannonball.shoot()
  balls[balls.length-1].shoot()
    
  }

}
function  keyPressed(){
if (keyCode === DOWN_ARROW){
  cannonball = new CannonBall(cannon.x+50,cannon.y)
  console.log(cannon.x+cannon.y)
  balls.push(cannonball)
}
}
function showCannonballs(ball,i){
if(ball){
  ball.display()



}



}
