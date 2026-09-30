/**
 * Day to night
 * Mai
 * 
 * change of colour day into night */

"use strict";

let sky = {
    r: 0,
    g: 191,
    b: 255
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
    //clouds
    fill(255,255,255);
    ellipse(400, 50, 300, 100);
    ellipse(300, 30, 300, 100);
    ellipse(200, 50, 300, 100);
    ellipse(100, 30, 300, 100);
    ellipse(50, 50, 300, 100);

}