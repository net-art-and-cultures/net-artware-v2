/* global colorMode, RGB, fill, noStroke, rect */
window.brushes.paintBucket = {
  name: 'paint bucket',
  draw: function () {
    const hue = random(0, 360)
    colorMode(HSB)
    fill(hue, 50, 100)
    noStroke()
    rect(0, 0, window.innerWidth, window.innerHeight)
  }
}
