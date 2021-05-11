/* global mouseIsPressed, image, clown */
window.brushes.clownStamp = {
  name: 'clown stamp',
  draw: function () {
    if (mouseIsPressed) {
      image(clown, window.input.x, window.input.y, 50, 50);
    }
  }
}
