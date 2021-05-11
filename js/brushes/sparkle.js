/* global random, colorMode, fill, stroke, sin, ellipse,
 HSB, frameCount */
window.brushes.sparkle = {
  name: 'sparkle',
  draw: function () {
    colorMode(RGB)
    stroke(random(0, 360), random(0, 360), random(0, 360))
    fill(random(0, 360), random(0, 360), random(0, 360))
    translate(window.input.x, window.input.y)
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
      stroke(random(0, 360), random(0, 360), random(0, 360), random(0, 35))
      strokeWeight(random(1, 10))
      fill(random(0, 360), random(0, 360), random(0, 360), random(0, 50))
      ellipse(random(50, 0), random(0, 50), random(10, 50), random(10, 50))
      rotate(PI/3)
    }
  }
}
