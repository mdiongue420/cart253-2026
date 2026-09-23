/**
 * Prototype : instructions : My cat
 * Maimouna
 * 
 * An attempt to create a cat using variables and fonctions
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 * This function is called once at the beginning of the program to initialize the canvas and any variables.
 */
function setup() {
     createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 * This function is called repeatedly after setup() to draw the canvas.
 */
function draw() {
    background(0,0,0)
    fill (255, 0,0); 
    ellipse(width, height, 50, 50);
}