var x, y, a, b = 0;
var c, c1 = 0 //variables for cheese wheel 
function setup(){
  createCanvas(600, 400);
  x=width/2
  y=height/2

  c=width/4
  c1=height/10
}

function draw(){
  background(255, 160, 255);  //pink background color
  // add your drawing code here ...
  //x++
  if(x>width){
    x=0
  }
  a += .01;
  push()
  translate(x, y)
  //rotate(a)

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
  fill(255, 137, 240) //light pink
  ellipse(0, 0, 20)
  
  translate(c, c1) //new center point for cheese wheel
  b+=.06
  //rotate(b) //cheese wheel rolling away
  
  //Cheese wheel
  fill(255, 202, 40)
  stroke(255, 180, 0)
  strokeWeight(2)
  ellipse(0, 0, 80)
  //Cheese holes
  fill(255, 180, 0)
  ellipse(-10, 0, 10)
  ellipse(10, 0, 8)
  ellipse(-12, 20, 8)
  ellipse(12, 30, 10)
  ellipse(-20, 30, 7)
  ellipse(-20, -30, 10)
  ellipse(-30, -10, 8)
  ellipse(20, -10, 10)
  ellipse(0, -20, 10)
  ellipse(20, -30, 8)
  ellipse(27, 20, 12)

  


  


  pop()

  
 


}