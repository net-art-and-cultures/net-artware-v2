// coffee stain brush

var t;
var img;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(45,0,20, 0.8);
  noFill();
  t = 0;
}

function draw() {
   // image(img,200,200, 210.5, 77.76);
  translate(mouseX, mouseY);
  beginShape();
  for (var i = 0; i < 1000; i++) {
    var ang = map(i, 0, 250, 0, random(0,10));
    var rad = 200 * noise(i, t * 0.0005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

}

