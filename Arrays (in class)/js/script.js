/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

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
    background(220);
    drawSquare(100, 250);  
    drawSquareTwo(square);
    drawSquareTwo(squareSecond);
}
    

    



function drawSquare(x1, y) {
    push();
    fill(100, 150, 255);
    rect(x1, y, 40, 40);
    pop();

}
function drawSquareTwo(x1, y) {
    push();
    fill(100, 150, 255);
    rect(x1, y, 40, 40);
    pop();
}