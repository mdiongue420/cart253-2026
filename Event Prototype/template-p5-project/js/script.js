/**
 * Get on the other side
 * Maimouna
 *
 * Move a shape around with the keys to get on the on the other side of the canvas

// The size of a single tile
const tileSize = 32;

// Dimensions of the "world"
const rows = 10;
const columns = 10;

const backgroundColour = "#CE87C9";

// The player
const player = {
  // Position and size
  x: 0,
  y: 0,
  size: tileSize,
  // Colour
  fill: "#87ceeb",
  // Sound effect
  moveSFX: undefined
};

// The coin
const coin = {
  // Position and size
  x: tileSize * 5,
  y: tileSize * 6,
  size: tileSize,
  // Colour
  fill: "#ceeb87",
  // Has it been picked up yet?
  collected: false,
  // Sound effect
  collectSFX: undefined
};

/

/**
 * Create the canvas
 */
async function setup() {
  // A 10x10 world
  createCanvas(tileSize * columns, tileSize * rows);

  await preload();
}

/**
 * Display the player and coin, check overlap
 */
function draw() {
  background(backgroundColour);
  
  // The player
  push();
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);
  pop();
}

/**
 * Respond to a keypress
 */
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
