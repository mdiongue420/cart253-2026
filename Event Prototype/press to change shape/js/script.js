/**
 * Change of Shape  
 * Maimouna
 * 
 * Every time key is pressed, shaped changes
 */

"use strict";

// Variable to keep track of the current shape (0 = circle, 1 = square, 2 = triangle)
let shapeIndex = 0;

function setup() {
  createCanvas(400, 400);
  background(220); // Background is drawn ONCE here so shapes stay permanently
  rectMode(CENTER); // Makes rectangles draw from their center
}

function draw() {
  // Left empty so it doesn't wipe away your clicks every frame!
}

function mousePressed() {
 // 1. Draw the current shape at the mouse position
  stamp(mouseX, mouseY);


  // 2. Advance to the next shape (loops 0 -> 1 -> 2 -> 0)
  shapeIndex = (shapeIndex + 1) % 3;
}

function stamp(x, y) {
  push();   
  fill(100, 150, 255);
  noStroke();

  // Draw different shapes based on the current shapeIndex at the mouse position (x, y)
  if (shapeIndex === 0) {
    // 1. Circle
    ellipse(x, y, 100, 100);
  } 
  else if (shapeIndex === 1) {
    // 2. Square
    rect(x, y, 100, 100);
  } 
  else if (shapeIndex === 2) {
    // 3. Triangle
    triangle(
      x, y - 60,        
      x - 60, y + 50,    
      x + 60, y + 50     
    );
  }
  
  pop();
}

