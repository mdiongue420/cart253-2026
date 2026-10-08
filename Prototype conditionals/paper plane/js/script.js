/**
 * Paper Plane
 * Mai
 * 
 * making the paper plane move with conditionals using mouse dragged
 * 
 */

"use strict";
let trianglePositionX = 200;
let trianglePositionY = 200;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(710, 400);
  background(135,206,250);

  // Set width of the lines
  strokeWeight(10);
  //colorMode(360, 100, 100);

 
}

function mouseDragged() {
    background(135,206,250);
    console.log(mouseX, mouseY);
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  fill(0, 0, 0);
  stroke(mouseX % 360, 100, 100);
  line(pmouseX, pmouseY, mouseX, mouseY);
  triangle(mouseX, mouseY, mouseX + 10, mouseY, mouseX + 5, mouseY - 10);
}