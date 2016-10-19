//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var chalk, paint, pencil, pen, marker, charcoal, ink, colored;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
chalk = loadAnimation("assets/chalk001.png", "assets/chalk016.png");
paint = loadAnimation("assets/paint001.png", "assets/paint016.png");
pencil = loadAnimation("assets/pencil001.png", "assets/pencil016.png");
pen = loadAnimation("assets/pen001.png", "assets/pen024.png");
marker = loadAnimation("assets/marker001.png", "assets/marker028.png");
charcoal = loadAnimation("assets/charcoal001.png", "assets/charcoal044.png");
ink = loadAnimation("assets/ink001.png","assets/ink037.png");
colored = loadAnimation("assets/color001.png","assets/color025.png");
  
//create an animation listing all the images files
}

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255,255,255);  
  
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(chalk, 100, 150);
  animation(paint,300,200);
  animation(pencil,500,500);
  animation(pen,150,500);
  animation(marker,700,200);
  animation(charcoal,350,500);
  animation(ink,550,150);
  animation(colored,800,450);

}