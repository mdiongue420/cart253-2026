/**
 * Day to night
 * Mai
 * 
 * change of colour day into night */

"use strict";

let sky = {
    r: 160,
    g: 180,
    b: 200
};
let sun = {
    r: 20,
    g: 200,
    b: 255
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 
*/
function setup() {
     createCanvas(400, 400);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(sky.r, sky.g, sky.b);
    fill(sun.r, sun.g, sun.b);
    ellipse(sun.x, sun.y, 50, 50);

}