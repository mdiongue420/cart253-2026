/**
 * Clock 
 * Mai
 * 
 * S/o P5!
 * A Clock that include a circle and  2 lines that rotate at different speeds.
 */

"use strict";

// Variable to control rotation
let angle1 = 0;
let angle2 = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Using degrees 
}

function draw() {
  background(0,0,139);

  push(); 
  translate(width / 2, height / 2);
  
 
  // Draw the circle in the center 
  fill(135,206,250);
  stroke(0);
  strokeWeight(1);
  circle(0, 0, 250);

 //FIRST LINE
  push();
  rotate(angle1);
  angle1 += 1; // Speed of line 1 
  
  stroke(0); //black line
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop(); // End first line rotation

  //SECOND LINE
  push();
  rotate(angle2);
  angle2 += 2; // Speed of line 2
  
  stroke(255, 0, 0); // Red line 
  strokeWeight(5);
  line(0, 0, 85, 0); 
  pop(); // End second line rotation

  pop(); // End main canvas translation



}