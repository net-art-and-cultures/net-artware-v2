/* global mouseIsPressed, image, clown */
window.brushes.clownStamp = {
  name: 'clown stamp',
  draw: function () {
    if (mouseIsPressed) {
      image(clown, window.input.x-25, window.input.y-25, 50, 50);
    }
  }
}
