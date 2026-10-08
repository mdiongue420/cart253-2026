/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let mouseTriggerBall = {
    x: 200,
    y: 200,
    size: 50,
    FillColour : {
        r: 125,
        g: 255,
        b: 255
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500)
    background(0);

    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    fill(mouseTriggerBall.FillColour.r, 
        mouseTriggerBall.FillColour.g, 
        mouseTriggerBall.FillColour.b);
    //fill (random(0,255), random(0,255), random(0,255));
   ellipse (mouseX, 
     mouseY, 
  mouseTriggerBall.size)

}
function moveBall() {
   // mouseTriggerBall.x = 
    mouseTriggerBall.x += mouseTriggerBall.Speed;
}

function KeyPressed() {
    mouseTriggerBall.speed = 2;
    
    
    
    //console.log(mouseX,mouseY);
    //fill (random(0,255), random(0,255), random(0,255));
    //ellipse (mouseX, 
       // mouseY, 
        //mouseTriggerBall.size)
    
    }
 function KeyReleased() {
        mouseTriggerBall.speed = 0;
    }

    //function mouseWheel(event) {
       // mouseTriggerBall.size = constrain(mouseTriggerBall.size, 10, 100);
       // mouseTriggerBall.size = mouseTriggerBall.size - event.deltaY;
    
    