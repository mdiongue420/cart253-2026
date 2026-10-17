/**
 * Ferris Wheel
 * Mai
 * 
 * S/o P5!
 * A Ferris Wheel that include a circle and line segments that rotate around the center of the canvas. The line segments are drawn at angles of 0, 30, 60, and 90 degrees, and the color of each line segment is determined by its angle. The Ferris Wheel rotates continuously, creating a dynamic visual effect.
 */

"use strict";
{
// Variable to control rotation
let angle = 0;
let speed = 0.5; // Speed of rotation
let numSpokes = 8; // Number of spokes in the Ferris wheel
};



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for easy counting
}

function draw() {
  background(220);
  
  // 1. Move to the center of the canvas
  translate(width / 2, height / 2);
  
  // 2. Rotate the entire wheel continuously
  rotate(angle);
  
  // 3. Draw the outer rim and center hub
  stroke(100);
  strokeWeight(4);
  Fill(128,0,128);
  circle(0, 0, 240); // Outer rim
  
  fill(50);
  noStroke();
  circle(0, 0, 20); // Hub
  
  // 4. Draw spokes and gondolas easily using a loop
  let numSpokes = 8;
  stroke(100);
  strokeWeight(3);
  
  for (let i = 0; i < 360; i += 360 / numSpokes) {
    push(); // Save the current rotation state
    
    // Rotate to the specific spoke's angle
    rotate(i);
    
    // Draw a straight vertical line from center to edge (no math needed!)
    line(0, 0, 0, -120);
    
    // Draw the passenger car at the outer edge of this spoke
    fill(150, 50, 50);
    noStroke();
    circle(0, -135, 25); // Placed just outside the 120-radius rim
    
    pop(); // Restore rotation state for the next spoke
  }
  
  // 5. Spin speed
  angle += 0.5;
}