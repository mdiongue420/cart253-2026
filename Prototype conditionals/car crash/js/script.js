/**
 * A car crash : using conditionals
 * Mai
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// Position variables
let rectPositionX = 100;
let rectPositionY = 300;

let rect2PositionX = 300;
let rect2PositionY = 300;

// Speed variables
let rectSpeedX = 2;
let rectSpeedY = 3;

let rect2SpeedX = -2;
let rect2SpeedY = 3;

let rectRadius = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Redraw black background every frame to prevent trails
  background(0,191,255);
  // --- DRAW RECTANGLE AT THE BOTTOM ---
  fill(169,169,169); // Color of the rectangle
  noStroke();          // Optional: remove outline
  // rect(x, y, width, height)
  // y = 350 places it near the bottom; height = 50 fills down to 400
  rect(0, 350, 400, 50);
 
  // Styling
  stroke(255);
  strokeWeight(4);
  fill(255,105,180);

  // Move rectangles toward each other ONLY while a key is held down
  if (keyIsPressed === true) {
    // Stop them from passing each other when they meet in the middle (x = 200)
    if (rectPositionX < 200) {
      rectPositionX += rectSpeedX;
    }
    if (rect2PositionX > 200) {
      rect2PositionX += rect2SpeedX;
    }
  }

  // Draw both rectangles each frame
  rect(rectPositionX, rectPositionY, rectRadius * 2, rectRadius * 2);
  rect(rect2PositionX, rect2PositionY, rectRadius * 2, rectRadius * 2);
}