/**
 * Eclipse
 * 
 * 
 * An eclipse 
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let sky = {
    r: 25,
    g: 25,
    b: 112
};

let moon = {
x: 10,
y: 200,
  size: 100,

}

let sun = {
x: 400,
y: 200,
  size: 100,

}
let cloud1 = {
    x:300,
    y:200,
    w:200,
    size: 100, 
}

let cloud2 = {
    x:200,
    y:200,
    w:200,
    size: 100, 
}
let moving = 0;
let movingchange = 0;




/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup(){
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(sky.r, sky.g, sky.b);
    sky.r = sky.r - 1;
    sky.g = sky.g + 1;
    sky.b = sky.b + 1;

    
    //moon
    fill(255, 255, 255);
    ellipse(moon.x, moon.y, moon.size);
    moon.x = moon.x + 1;

    //sun
    fill(255, 215, 0);
    ellipse(sun.x, sun.y, sun.size);
    sun.x = sun.x - 1;

    // clouds
    fill(255, 127, 80)
    ellipse(cloud1.x, cloud1.y, cloud1.w, cloud1.size)
    cloud1.x = lerp(cloud1.x, 255, 0.01);
    cloud1.y = lerp(cloud1.y, 0, 0.01);


    fill(255,127, 80)
    ellipse(cloud2.x, cloud2.y, cloud2.w, cloud2.size)
    cloud2.x = lerp(cloud2.x, 0, 0.01);
    cloud2.y = lerp(cloud2.y, 255, 0.01);
    
}