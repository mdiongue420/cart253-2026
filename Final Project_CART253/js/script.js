/**
 * Title of Project
 * Author Name
 * 
 * word mosaique 
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let userText = "TYPE ME "; // Default starting text so you see the mosaic immediately

function setup() {
  createCanvas(600, 400);
  textFont('monospace');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(20, 20, 30);
  
  // Define the size of each tile in the mosaic
  let tileW = 100;
  let tileH = 50;
  
  // If the user erased everything, show a subtle prompt instead of a blank screen
  let displayText = userText.length > 0 ? userText : "TYPE...";
  
  // Nested loops to cover the entire canvas width and height
  for (let x = tileW / 2; x < width; x += tileW) {
    for (let y = tileH / 2; y < height; y += tileH) {
      
      // Create a checkerboard or wave color pattern based on grid position
      let r = map(x, 0, width, 100, 255);
      let g = map(y, 0, height, 100, 255);
      let b = 220;
      
      // Alternate brightness like mosaic tiles
      if ((Math.floor(x / tileW) + Math.floor(y / tileH)) % 2 === 0) {
        fill(r, g, b);
      } else {
        fill(r * 0.5, g * 0.5, b * 0.7);
      }
      
      textSize(16);
      text(displayText, x, y);
    }
  }
}

function keyTyped() {
  if (keyCode !== BACKSPACE && keyCode !== DELETE && keyCode !== ENTER && keyCode !== RETURN) {
    userText += key;
  }
  return false;
}

function keyPressed() {
  if (keyCode === BACKSPACE || keyCode === DELETE) {
    userText = userText.slice(0, -1);
    return false;
  } else if (keyCode === ENTER || keyCode === RETURN) {
    userText = "";
    return false;
  }
}