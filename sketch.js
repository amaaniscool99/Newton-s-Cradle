const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var chain1, chain2, chain3, chain4, chain5

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(400, 200, 690, 20);
    bobObject1 = new Bob(300, 500, 50, 50);
    bobObject2 = new Bob(350, 500, 50, 50);
    bobObject3 = new Bob(400, 500, 50, 50);
    bobObject4 = new Bob(450, 500, 50, 50);
    bobObject5 = new Bob(500, 500, 50, 50);

    chain1= new Chain(bobObject1.body, roof.body);
    chain2= new Chain(bobObject2.body, roof.body);
    chain3= new Chain(bobObject3.body, roof.body);
    chain4= new Chain(bobObject4.body, roof.body);
    chain5= new Chain(bobObject5.body, roof.body);

}

function draw(){
    background("gray");
    Engine.update(engine);
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    roof.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    strokeWeight(3);
    line(bobObject1.position.x, bobObject1.position.y, roof.body.position.x, roof.body.position.y)

    strokeWeight(3);
    line(bobObject2.position.x, bobObject2.position.y, roof.body.position.x, roof.body.position.y)

    strokeWeight(3);
    line(bobObject3.position.x, bobObject3.position.y, roof.body.position.x, roof.body.position.y)

    strokeWeight(3);
    line(bobObject4.position.x, bobObject4.position.y, roof.body.position.x, roof.body.position.y)

    strokeWeight(3);
    line(bobObject5.position.x, bobObject5.position.y, roof.body.position.x, roof.body.position.y)
}