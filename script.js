var x, y, a = 0;
function setup(){
  createCanvas(600, 400);
  x=width/2
  y=height/2
}

function draw(){
  background(255, 160, 255);
  // add your drawing code here ...
  x++
  if(x>width){
    x=0
  }
  a += .01;
  push()
  translate(x, y)
  rotate(a)
  //Ears
  stroke(255, 160, 255);
  fill(222, 44, 147)
  arc(-75, -80, 100, 100, HALF_PI, TWO_PI);
  arc(75, -80, 100, 100, PI, HALF_PI);
  stroke(252, 137, 185);
  fill(252, 137, 185);
  ellipse(-75, -80, 75);
  ellipse(75, -80, 75);
  //Face
 fill(222, 44, 147);
 ellipse(0, 0, 175);
  //eyes
  stroke(0);
  fill(255)
  ellipse(-50, -10, 50);
  ellipse(50, -10, 50);
  pop()

  
 


}