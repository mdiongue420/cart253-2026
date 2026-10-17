/**
 * Ferris Wheel
 * Mai
 * 
 * S/o P5!
 * A Ferris Wheel that include a circle and line segments that rotate around the center of the canvas. The line segments are drawn at angles of 0, 30, 60, and 90 degrees, and the color of each line segment is determined by its angle. The Ferris Wheel rotates continuously, creating a dynamic visual effect.
 */

"use strict";

// Variable to control rotation
let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for easy counting
}

function draw() {
  background(0,0,139);

  // Move origin to the center first so transformations apply correctly
  push(); // Save the current drawing state
  translate(width / 2, height / 2);
  
  // Use your angle variable and increment it
  rotate(angle);
  angle += 1; // Increase the angle every frame

  // Draw the animated line from the center
  stroke(255);
  strokeWeight(5);
  line(0, 0, 150, 0);
  
  pop(); // Restore the original drawing state so it doesn't affect other shapes

  // Draw a circle centered on the canvas (using the translated center)
  fill(255);
  // circle(0, 0, 128); // Uncomment if you want it in the middle
}