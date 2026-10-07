/**
 * eye open and close
 * Mai
 * 
 * when mouse is pressed circle turns into a line
 
 */

"use strict";
let iscircle = true;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(400,400)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220);
    if (iscircle) {
        circle(width/2, height/2, 100);
    } else {
        line(150,200,250,200);
    }

function mousePressed() {
    iscircle = !iscircle;

}