/**
 * Jump Over
 * Maimouna
 * 
 * Square jumps over triangle when spacebar is pressed
 */

"use strict";

let playerY = 250;
let playerVY = 0;
let gravity = 0.6;
let jumpForce = -11;

let triangleX = 400;
const target = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000",
  fills: {
    noOverlap: "#ff0000",
    overlap: "#00ff00"
  } 
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  // 1. Gravity and jumping physics for the square
  playerVY += gravity;
  playerY += playerVY;

  // Stop at the floor (y = 250)
  if (playerY > 250) {
    playerY = 250;
    playerVY = 0;
  }
  function draw() {
  checkOverlap();
  drawTarget();
}

  // 2. Move the triangle obstacle across the screen
  triangleX -= 4;
  if (triangleX < -20) {
    triangleX = width + 20; // Loop back to the right
  }

  // 3. Draw the ground line
  stroke(0);
  line(0, 290, width, 290);

  // 4. Draw the square (player)
  noStroke();
  fill(100, 150, 255);
  rect(100, playerY, 40, 40);

  // 5. Draw the triangle (obstacle)
  fill(255, 100, 100);
  triangle(triangleX, 290, triangleX - 15, 250, triangleX + 15, 290);
}

function keyPressed() {
  // Jump when spacebar is pressed and player is on the ground
  if (key === ' ' && playerY === 250) {
    playerVY = jumpForce;
  }
}