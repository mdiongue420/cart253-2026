/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circleX = 250;
let circleY = 250;

let Circle_X_2 = 100;
let Circle2_X_2 = 100;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
    background('skyblue');
    let newVal = squareNum(2);
    let newVal2 = squareNum(3);
    console.log(newVal);
    console.log(newVal2);


}


function squareNum(num) {
    let squaredNumValue = num * num;
    return squaredNumValue;
}

function calculateDistance(objX, objY) {
    let d = dist(mouseX, mouseY, objX, objY);
    let mappedX = map(d,0,250,2,10);
    return d;
}
function calculateCloseness(objX, objY) {
    let d = dist(mouseX, mouseY, objX, objY);
    let mappedX = map(d,0,250,2,10);
    return mappedX;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    //complexCircles();
    // complexCircles_2();
    // complexCircles_3();
   // let d = calculateDistance(circleX, circleY);
    //console.log(d);
    
    let newVal = calculateCloseness(circleX, circleY);
    console.log(newVal);
    complexCircles_P(circleX, circleY, 80, 80);
    changeY(circleY);
    complexCircles_P(Circle2_X_2, Circle2_Y_2, 100, 100);
    changeY(Circle2_Y_2);
    let value = random(0, 255);
    console.log(value);
}

function ChangeY(yVal) {
    yVal = yVal - 1;
    console.log(yVal);
}

function complexCircles() {
    // Implementation for complex circles
    push();
    fill(255,191,0);
    ellipse(width/2, height/2, 80, 80);
    fill(255, 0, 0);
    ellipse(width/2, height/2, 60, 60);
    fill(0, 0, 255);
    ellipse(width/2, height/2, 40, 40);
    pop();
}

function complexCircles_2() {
    // Implementation for second set of complex circles
    push();
    fill(0, 255, 0);
    ellipse(width/2, height/2-100, 80, 80);
    fill(255, 255, 0);
    ellipse(width/2, height/2-100, 60, 60);
    fill(255, 0, 255);
    ellipse(width/2, height/2-100, 40, 40);
    pop();
}
function complexCircles_3() {
    // Implementation for third set of complex circles
    push();
    fill(0, 0, 255);
    ellipse(width/2, height/2-200, 80, 80);
    fill(255, 0, 0);
    ellipse(width/2, height/2-200, 60, 60);
    fill(0, 255, 255);
    ellipse(width/2, height/2-200, 40, 40);
    pop();
}
  function complexCircles_P(x, y, w, h) {
    // parameters
    push();
    fill(0, 255, 0);
    ellipse(x, y, w, h);
    fill(255, 255, 0);
    ellipse(x, y, w-20, h-20);
    fill(255, 0, 255);
    ellipse(x, y, w-40, h-40);
    pop();
}