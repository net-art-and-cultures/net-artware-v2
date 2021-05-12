/* global colorMode, RGB, fill, noStroke, ellipse */
let slider;
window.brushes.eraser = {
  name: 'eraser',
  draw: function () {
    slider= document.getElementById("eraserSlider")
    colorMode(RGB)
    fill(255, 255, 255)
    noStroke()
    const radius = slider.value
    ellipse(window.input.x, window.input.y, radius, radius)
  }
}
