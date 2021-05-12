let angle = 0;

window.brushes.rotatingSquares = {
    name: 'rotating Squares',
    draw: function() {
        colorMode(HSB)
        fill(300, 50, 100)
        angleMode(DEGREES);
        rectMode(CENTER);

        translate(window.input.x, window.input.y)
        rotate(angle);
        rect(0, 0, 80, 80);

        angle += 1;
    }
}