/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
let sky = {
  r: 160,
  g: 180,
  b: 200
};
let bird = {
  x: 20,
  y: 50,
  size: 50,
  fill: {
    r: 0,
    g: 0,
    b: 255
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);
  sky.r = sky.r - 1;
  sky.g = sky.g - 1;
  sky.b = sky.b - 1;
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  mrFurious.fill.g = mrFurious.fill.g - 1;
  mrFurious.fill.b = mrFurious.fill.b - 1;
  pop();

  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  quad(bird.x, bird.y, bird.x + bird.size, bird.y, bird.x, bird.y - bird.size, bird.x - bird.size, bird.y);
    bird.x = bird.x + 1;
    

}