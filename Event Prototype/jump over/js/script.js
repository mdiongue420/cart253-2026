/**
 * Jump Over
 * Maimouna
 * 
 /**
 * Square Jumping over Triangle + Mouse Hover Color Change
 * Combines Pippin Barr's DIY distance() with jump mechanics
 */

"use strict";

// Player (square) properties
const player = {
  x: 100,
  y: 250,          // Top-left y position
  size: 40,
  vy: 0,
  gravity: 0.6,
  jumpForce: -11,
  floorY: 250,     // Where the top of the square rests on the ground
  fill: "#6496ff",
  fills: {
    noOverlap: "#6496ff", // Default blue
    overlap: "#00ff00"    // Green when mouse hovers over the square
  }
};

// Triangle obstacle properties
let triangleX = 400;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  // 1. Gravity and jumping physics for the square
  player.vy += player.gravity;
  player.y += player.vy;

  // Stop at the floor
  if (player.y > player.floorY) {
    player.y = player.floorY;
    player.vy = 0;
  }

  // 2. Check mouse hover using our custom distance() function
  checkMouseHover();

  // 3. Move the triangle obstacle across the screen
  triangleX -= 4;
  if (triangleX < -20) {
    triangleX = width + 20; // Loop back to the right
  }

  // 4. Draw the ground line
  stroke(0);
  line(0, 290, width, 290);

  // 5. Draw the square (player)
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);

  // 6. Draw the triangle (obstacle)
  fill(255, 100, 100);
  triangle(triangleX, 290, triangleX - 15, 250, triangleX + 15, 290);
}

/**
 * Checks if the mouse hovers over the square using Pippin Barr's custom distance()
 */
function checkMouseHover() {
  // Find the center coordinates of the square
  const centerX = player.x + player.size / 2;
  const centerY = player.y + player.size / 2;

  // Calculate distance between mouse and square center
  const d = distance(mouseX, mouseY, centerX, centerY);

  // Change color based on distance
  if (d < player.size / 2) {
    player.fill = player.fills.overlap;
  } else {
    player.fill = player.fills.noOverlap;
  }
}

/**
 * Calculate the distance between two (x, y) coordinates using Pythagorean theorem
 */
function distance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const d = sqrt(pow(dx, 2) + pow(dy, 2));
  return d;
}

/**
 * Jump when spacebar is pressed and player is on the ground
 */
function keyPressed() {
  if (key === ' ' && player.y === player.floorY) {
    player.vy = player.jumpForce;
  }
}