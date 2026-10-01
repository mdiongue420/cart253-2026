/**
 * Day to night
 * Mai
 * 
 * change of colour day into night */

"use strict";

let moon = {
    r: 50,
    g: 50,
    b: 50
};

let sky = {
    r: 0,
    g: 191,
    b: 255
};
let cloud = {
    r: 255,
    g: 255,
    b: 255
};
let sun = {
    r: 255,
    g: 215,
    b: 0
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
    sky.r = sky.r - 1;
    sky.g = sky.g - 1;
    sky.b = sky.b - 1;

    //clouds
    fill(cloud.r, cloud.g, cloud.b);
    ellipse(400, 50, 300, 100);
    ellipse(300, 30, 300, 100);
    ellipse(200, 50, 300, 100);
    ellipse(100, 30, 300, 100);
    ellipse(50, 50, 300, 100);
    cloud.r = cloud.r - 1;
    cloud.g = cloud.g - 1;
    cloud.b = cloud.b - 1;
    
    // sun
    fill(sun.r, sun.g, sun.b);
    circle(100, 200, 100);
    sun.r = sun.r - 1;
    sun.g = sun.g - 1;
    sun.b = sun.b - 1;

    // moon
    fill(moon.r, moon.g, moon.b);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
    moon.r = moon.r + 1;
    moon.g = moon.g + 1;
    moon.b = moon.b + 1;

   

}