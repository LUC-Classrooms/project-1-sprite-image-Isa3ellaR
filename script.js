/*
Isabella Rodriguez;
Completion date: 2/26/2024;
This is an image of a mouse and a cheese wheel;
When the mouse is clicked users can expect the mouse to chase the cheese wheel and the cheese wheel to rotate;
*/

var x, y, a, b = 0;
var c, c1 = 0 //variables for cheese wheel 
function setup(){
  createCanvas(600, 400);
  x=width/2;
  y=height/2;

  c=width/4;
  c1=height/10;
}

function draw(){
  background(79, 195, 247)  //light blue background
  // add your drawing code here ...
  
  if(mouseIsPressed){
    x++; //If the mouse is pressed the mouse image will move +1 from x variable
  }
  if(x>width){
    x=0; //If the X value excedes the width of the canvas it returns to zero value.
  }
  a += .01;
  push();
  translate(x, y); // new center point for mouse image

  //Ears
  stroke(255, 160, 255); //light pink inside of ears
  fill(222, 44, 147);  //magenta
  arc(-75, -80, 100, 100, HALF_PI, TWO_PI);  //left ear
  arc(75, -80, 100, 100, PI, HALF_PI);  //right ear
  stroke(252, 137, 185);
  fill(252, 137, 185);
  ellipse(-75, -80, 75);  //inside of left ear
  ellipse(75, -80, 75);  //inside of right ear

  //Face
 fill(222, 44, 147); //magenta fill for face
 ellipse(0, 0, 175);

  //Eyes
  stroke(0);
  fill(255) //white inside of eyes
  ellipse(-50, -10, 50);  //left eye
  ellipse(50, -10, 50);  //right eye
  fill(0)  //black for pupils 
  ellipse(-50, -2, 35); //left pupil
  ellipse(50, -2, 35);  //right pupil

  //Nose
  fill(255, 137, 240); //light pink
  ellipse(0, 0, 20);
  
  translate(c, c1); //new center point for cheese wheel
  b+=.06
  if(mouseIsPressed){
    rotate(b); //cheese wheel rolling away
    //If the mouse is pressed the cheese wheel will rotate by .06
  }
  
  //Cheese wheel
  fill(255, 202, 40);  //Light yellow
  stroke(255, 180, 0);  //darker yellow outline color
  strokeWeight(2);
  ellipse(0, 0, 80);  //main cheese circle

  //Cheese holes
  fill(255, 180, 0);
  ellipse(-10, 0, 10);
  ellipse(10, 0, 8);
  ellipse(-12, 20, 8);
  ellipse(12, 30, 10);
  ellipse(-20, 30, 7);
  ellipse(-20, -30, 10);
  ellipse(-30, -10, 8);
  ellipse(20, -10, 10);
  ellipse(0, -20, 10);
  ellipse(20, -30, 8);
  ellipse(27, 20, 12);


  


  


  pop()

  
 


}