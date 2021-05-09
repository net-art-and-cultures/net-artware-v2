/* global random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount */
window.brushes.sparkle = {
  name: 'sparkle',
  draw: function () {
    // image(twinkle, window.input.x, window.input.y, 50, 50)
// twink()
    colorMode(RGB)
    // stroke(frameCount % 360, 100, 100)
    stroke(random(0,360), random(0,360), random(0,360))
    fill(random(0,360), random(0,360), random(0,360))
    translate(window.input.x, window.input.y,)
    beginShape()
    vertex(-10, 10)
    vertex(0, 35)
    vertex(10, 10)
    vertex(35, 0)
    vertex(10, -8)
    vertex(0, -35)
    vertex(-10, -8)
    vertex(-35, 0)
    vertex(-10, 10)
    endShape()
    for (let i = 0; i < 10; i ++) {
      stroke(random(0,360), random(0,360), random(0,360), random(0,35))
      fill(random(0,360), random(0,360), random(0,360), random(0,50))
      ellipse(random(50, 0), random(0, 50), random(10, 50), random(10, 50))
    // ellipse(random(0, width), random(0, height), random(10, 50), random(10, 50))
      rotate(PI/2)
}
// function twink(){
  // image(twinkle, window.input.x, window.input.y, 50, 50)

//   push()
//   colorMode(RGB)
//   stroke(random(0,360), random(0,360), random(0,360))
//   noFill()
// translate(window.input.x, window.input.y,)
// vertex(-10, 10)
// vertex(0, 35)
// vertex(10, 10)
// vertex(35, 0)
// vertex(10, -8)
// vertex(0, -35)
// vertex(-10, -8)
// vertex(-35, 0)
// vertex(-10, 10)


    // for (float a = 0; a < TWO_PI; a+=0.01) {
    //   float r = 1
    //   float x = 16 * pow(sin(a), 3)
    //   float y = -1*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a))
    //   vertex(x,y)


    // beginShape()
    // vertex(0, 35)
    // vertex(35, 0)
    // vertex(0, -35)
    // vertex(-35, 0)
    // endShape()
  }
}
  // ellipse(window.input.x, window.input.y, random(30), random(60))
