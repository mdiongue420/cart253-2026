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
  // The player
  push();
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);
  pop();
}
  
 function keyPressed(event) {
  // Check if it was one of the arrows and choose the move
  // direction
  let move = {
    x: 0,
    y: 0
  };
  if (event.keyCode === RIGHT_ARROW) {
    move.x = tileSize;
  }
  else if (event.keyCode === LEFT_ARROW) {
    move.x = -tileSize;
  }
  else if (event.keyCode === UP_ARROW) {
    move.y = -tileSize;
  }
  else if (event.keyCode === DOWN_ARROW) {
    move.y = tileSize;
  }
  // Apply the movement if there is any
  // and play the sound effect
  if (move.x !== 0 || move.y !== 0) {

    const p = random(0, 100);
    if (p < 10) {
      move.y = -move.y;
    }
    
    player.x += move.x;
    player.y += move.y;
    player.moveSFX.play();
  }
}
