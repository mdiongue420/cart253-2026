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
  rectMode(CENTER); // Makes rectangles draw from their center
}

function draw() {
  background(220);
}
function mousePressed() {
  stamp(mouseX, mouseY);
}

function stamp(x, y){
push();   
  fill(100, 150, 255);
  noStroke();

  // Draw different shapes based on the current shapeIndex
  if (shapeIndex === 0) {
    // 1. Circle
    ellipse(width / 2, height / 2, 100, 100);
    Pop();
  } 
  push();
  else if (shapeIndex === 1) {
    // 2. Square
    rect(width / 2, height / 2, 100, 100);
    pop();
  } 
  push();
  else if (shapeIndex === 2) {
    // 3. Triangle
    triangle(
      width / 2, height / 2 - 60,         
      width / 2 - 60, height / 2 + 50,    
      width / 2 + 60, height / 2 + 50     
    );
    pop; 
  }
}

