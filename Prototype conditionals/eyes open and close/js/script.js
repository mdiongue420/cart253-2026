/**
 * eye open and close
 * Mai
 * 
 * when mouse is pressed circle turns into a line
 
 */

"use strict";
let isCircle = true;

/**
 * canva setup + weight of the lines
*/
function setup() {
createCanvas(400, 400);
  strokeWeight(4);     
  

}


/**
 * draws the circles or lines based on the isCircle flag
 */
function draw() {  
    background(240,255,255)
   if (isCircle) {
    // Left Circle
    fill(0,255,255)
    circle(130, 200, 80);
    // Right Circle
    circle(270, 200, 80);
  } else {
    // Left Horizontal Line (centered at X: 130, Y: 200, Length: 80)
    line(90, 200, 170, 200);
    // Right Horizontal Line (centered at X: 270, Y: 200, Length: 80)
    line(230, 200, 310, 200);
  }
  }

function mousePressed() {
    isCircle = !isCircle;
// 
}