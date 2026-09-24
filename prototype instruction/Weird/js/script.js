/**
 * Prototype Instruction #1
 * Maimouna 
 * 
 * a cat

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,255,255);
    fill (154,205,50)
    rect(100, 200, 300, 200, 30);
    fill (0,255,127);
    rect(150, 250, 350, 250, 30);
    fill (46,139,87);
    rect(160, 260, 360, 260, 40);
    line(30, 20, 85, 75);
    line(40, 30, 95, 85);
    line(200,100, 400, 300);
    fill (221,160,221);
    arc(200, 50, 80, 80, 0, PI + HALF_PI);
    fill (218,112,214);
    arc(250, 50, 80, 80, 0, PI + HALF_PI);
    fill (238,130,238);
    arc(300, 50, 80, 80, 0, PI + HALF_PI);
    fill (128,0,128);
    arc(350, 50, 80, 80, 0, PI + HALF_PI);

    // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw the quad.
  quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);
}
    


