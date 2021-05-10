const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score=0;
var ground;
var gameState = "start" ;
var count=0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
function draw() {
  background("black");
  textSize(30)
  text("Score : " + score,20,30);
  Engine.update(engine);
  fill(255)
  text("500",15,550);
  text("500",95,550);
  text("200",175,550);
  text("200",255,550);
  text("100",335,550);
  text("100",415,550);
  text("200",495,550);
  text("200",575,550);
  text("500",655,550);
  text("500",735,550);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gameState === "start"){
    for(var i = 0; i<particles.length;i++)  {  
      particles[i].display();
      
      }
      
      point();

   }

  if(count === 10){
    gameState = "end";
    fill("red");
    textSize(50);
    text("GAME OVER!!", 270, 245);
  }
}

function mousePressed(){
  if(gameState === "start"){
    particles.push(new Particle(mouseX, 10,10));
      count++;
     
  }
}
function point(){
  if(particle.body.position.y>500){
    if(particle.body.position.x>5 && particle.body.position.x<75){
      score= score+500;
      //particle = null;
    }
    if(particle.body.position.x>85 && particle.body.position.x<155){
      score= score+500;
     // particle = null;
    }
    if(particle.body.position.x>165 && particle.body.position.x<235){
      score= score+200;
      //particle = null;
    }
    if(particle.body.position.x>245 && particle.body.position.x<315){
      score= score+200;
      //particle = null;
    }
    if(particle.body.position.x>325 && particle.body.position.x<395){
      score= score+100;
      //particle = null;
    }
    if(particle.body.position.x>405 && particle.body.position.x<475){
      score= score+100;
     // particle = null;
    }
    if(particle.body.position.x>485 && particle.body.position.x<555){
      score= score+200;
     // particle = null;
    }
    if(particle.body.position.x>565 && particle.body.position.x<635){
      score= score+200;
     // particle = null;
    }
    if(particle.body.position.x>645 && particle.body.position.x<715){
      score= score+500;
     // particle = null;
    }
    if(particle.body.position.x>725 && particle.body.position.x<795){
      score= score+500;
     // particle = null;
    }
  }
}