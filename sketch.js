const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  ground=new Ground(600,390,1200,20);

    var ball_options ={
        restitution: 1.0
    }

    bird = new Bird(100,100);

    box1 = new Box(700,345,70,70);
    box2 = new Box(900,345,70,70);
    

    pig1 = new Pig(800, 355);
    //310 - 10
    log1 = new Log(800,300,275,PI/2);

    //300-10
    box3 = new Box(700,255,70,70);
    box4 = new Box(900,255,70,70);
    

    pig2 = new Pig(800, 245);
    //255-35 
    log2 = new Log(800,210,275,PI/2);

    //200-35
    box5 = new Box(800,165,70,70);
    log3 = new Log(750,160,100,PI/7);
    log4 = new Log(850,160,100,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground.display();
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}