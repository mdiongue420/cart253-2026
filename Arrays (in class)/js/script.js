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
let square = {
    x: 100,
    y: 250,
    w: 40,
    h: 60
}
let squareSecond = {
    x: 200,
    y: 300,
    w: 40,
    h: 40
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
    return ;

}
function drawSquareTwo(tempSquare) {
    push();
    fill(100, 150, 255);
    rect(tempSquare.x, tempSquare.y, tempSquare.w, tempSquare.h);
    pop();
    return;
} 