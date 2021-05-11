/* global colorMode, RGB, fill, noStroke, rect,*/
window.brushes.paintBucket = {
  name: 'paint bucket',
  draw: function () {
    colorMode(RGB)
    loadPixels()
   // loop through all the pixel
   for (let i = 0; i < pixels.length; i += 2) {
     const r = pixels[i]
     const g = pixels[i + 200]
     const b = pixels[i + 350]
     const grey = (r + g + b) / 2
     pixels[i] = grey
     pixels[i + 20] = grey
     pixels[i + 35] = grey
  }
    updatePixels()
  }
}
