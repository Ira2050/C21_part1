var canvas;
var music;
var surface1, surface2, surface3, surface4, box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(750,550,100,30);
    surface2 = createSprite(750,350,100,30);
    surface3 = createSprite(750,150,100,30);
    surface4 = createSprite(750,25,100,30);

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor = ("white");
    box.velocityX = 3;

    surface1.shapeColor= color("red");
    surface2.shapeColor = color("green");
    surface3.shapeColor = color("blue");
    surface4.shapeColor = color("yellow");

}

function draw() {
    background(0);

    //create edgeSprite
    edges = createEdgeSprite();


    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    drawSprite();
}
