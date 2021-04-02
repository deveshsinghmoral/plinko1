var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var b = 60; b <=80; b = b + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var c = 80; c <=80; c = c + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var d = 120; d <=120; d = d + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }

  for (var e = 140; e <=140; e = e + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }


  for (var f = 160; f <=160; f = f + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }


  
  for (var g = 180; g <=180; g = g + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/3, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects

  for (var j = 25; j <=width-25; j=j+50) 
  {
    plinkos.push(new Plinko(j,225));
  }
  //create 4th row of plinko objects

  for (var j = 15; j <=width-35; j=j+50) 
  {
    plinkos.push(new Plinko(j,325));
  }
  //create particle objects
  
  }

    

 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}