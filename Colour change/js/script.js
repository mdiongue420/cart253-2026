/**
 * Day to night
 * Mai
 * 
 * change of colour day into night */

"use strict";

let creature = {
    x: 150,
    y: 150,
    w: 120,
    h: 120,
    eye: {
        fill: "white",
        size: 120/3.5,
        centre_x: 150,
        centre_y: 150
    },
    fillstates: {
        happy: "#00FF00",
        sad: "#FF0000",
        angry: "#0000FF",
        neutral: "#FFFF00"
    },
    currentFill: "#FFFF00"
 
};


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 
*/
function setup() {
     createCanvas(500, 500);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

function draw() {
    mouseX, mouseY
    let distance = dist(creature.x, creature.y, mouseX, mouseY);
    //console.log(distance);
    if (distance < creature.w/2 ||mouseIsPressed === true) {
        creature.currentFill = creature.fillstates.angry;
    }
    //if (keyIsPressed === true) {
        //creature.currentFill = creature.fillstates.angry;
  //  } 
    
    //else {
        //creature.currentFill = creature.fillstates.neutral;
   // }
    background(0);
    push();
    //body
    fill(creature.currentFill);
    ellipse(creature.x, creature.y, creature.w, creature.h);

    //left eye
    fill(creature.eye.fill);
    ellipse(creature.eye.centre_x, creature.eye.centre_y, creature.eye.size);

    //right eye
    fill(creature.eye.fill);
    ellipse(creature.eye.centre_x + 50, creature.eye.centre_y, creature.eye.size);
    pop();
    
}