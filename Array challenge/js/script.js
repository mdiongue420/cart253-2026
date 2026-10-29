/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */
let Ball = {
    x: 100,
    y: 100,
    xspeed : 3,
    yspeed : 2,
    r: 25
}

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  

}


/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");
  
  moveBall(Ball);
  bounceBall(Ball);
  drawBall(Ball);
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(Ball) {
  Ball.x += Ball.velocity.x;
  Ball.y += Ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(Ball) {
  // Check if the ball has reached the left or right
  const bounceX = (Ball.x > width || Ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (Ball.y > height || Ball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    Ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    Ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(Ball) {
  push();
  noStroke();
  fill(Ball.fill);
  ellipse(Ball.x, Ball.y, Ball.size);
  pop();
}