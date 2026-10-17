/**
 * Ferris Wheel
 * Mai
 * 
 * S/o P5!
 * A Ferris Wheel that include a circle and line segments that rotate around the center of the canvas. The line segments are drawn at angles of 0, 30, 60, and 90 degrees, and the color of each line segment is determined by its angle. The Ferris Wheel rotates continuously, creating a dynamic visual effect.
 */

"use strict";

// Variable to control rotation
let angle1 = 0;
let angle2 = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for easy counting
}

function draw() {
  background(0,0,139);

  // Move origin to the center first so transformations apply correctly
  push(); // Save the current drawing state
  translate(width / 2, height / 2);
  
 
  // Draw the circle in the center (0,0 relative to the translation)
  fill(135,206,250);
  stroke(0);
  strokeWeight(1);
  circle(0, 0, 250);

 // --- FIRST LINE ---
  push();
  rotate(angle1);
  angle1 += 1; // Speed of line 1 (slow)
  
  stroke(0);   // Black line
  strokeWeight(5);
  line(0, 0, 150, 0);
  pop(); // End first line rotation

  // --- SECOND LINE ---
  push();
  rotate(angle2);
  angle2 += 3; // Speed of line 2 (faster! Change this to adjust speed)
  
  stroke(255, 0, 0); // Red line so you can distinguish it
  strokeWeight(3);
  line(0, 0, 120, 0); // Can also be a different length
  pop(); // End second line rotation

  pop(); // End main canvas translation



}