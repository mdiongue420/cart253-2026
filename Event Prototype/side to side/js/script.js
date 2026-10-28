/**
 * Get on the other side
 * Maimouna
 *
 * / Square moves side to side with arrow keys, leaving a trail behind
 */
// The size of a single tile
const tileSize = 32;

// Dimensions of the grid
const rows = 10;
const columns = 10;

// Background colour
const backgroundColour = "#CE87C9";

// The player
const player = {
  x: 0,
  y: 0,
  size: tileSize,
  fill: "#87ceeb",
  speed: 3 // Speed of movement
};

function setup() {
  createCanvas(tileSize * columns, tileSize * rows);
}

function draw() {
  // Instead of a solid background, i use a semi-transparent background 
  background(206, 135, 201, 20); 
  
  // Check for continuous key presses and update position
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
  }

  // Keep the player inside the canvas boundaries
  player.x = constrain(player.x, 0, width - player.size);
  player.y = constrain(player.y, 0, height - player.size);

  // Draw the player
  push();
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);
  pop();
}