/**
 * variable challenge
 * Maimouna
 * 
 * An attempt to create a cat using variables and fonctions
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 * This function is called once at the beginning of the program to initialize the canvas and any variables.
 */
//let ellipse_size = 50;
//let rect_size = 50;
//let sunX = 20;
//let sunY = 50;
let sunSize = 50;
let r = 255;
let g = 255;
let b = 0;

let BackGroundColor = 0;

let sun = { 
    sunX: 20,
    sunY: 50,
    sunSize: 50,
    r: 255,
    g: 255,
    b: 0
    } 
    

let bird = {
    birdX: 20,
    birdY: 50,
    birdSize: 50,
    r: 0,
    g: 0,
    b: 255   

}   
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
    ellipse (sun.sunX, sun.sunY, sun.sunSize, sun.sunSize);
    
    fill(bird.r, bird.g, bird.b);
    ellipse(bird.birdX, bird.birdY, bird.birdSize, bird.birdSize);
    bird.birdX = bird.birdX + 1;
    bird.x = constrain(bird.x, 0, width-100);
    console.log(bird.x); 
    BackGroundColor= BackGroundColor+1;
    //fill(bird.r, bird.g, bird.b);
   // rect(width/2, height/2,rect_size);
   // ellipse_size = ellipse_size-1;
   // rect_size=rect_size+1;

}