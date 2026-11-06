/**
 * Rain n Clouds
 * Maimouna
 * 
 * Everytime the mouse is clicked on the cloud, a raindrop falls down the screen.
 * Inspired by arrays challenge.
 */

"use strict";
let rainDrops = []; // Array to hold all the raindrops

/**
 * Setup canvas
 */
function setup() {
    createCanvas(400, 400);
    
}

/**
 * // create raindrops
 
 */
function createRainDrop() {
    const rainDrop = {
        x: random(0, width),
        y: random(-100, 0),
        velocity: {
            x: 0,
            y: random(2, 10)
        },
        size: random(15, 40),
        fill: "#445566"
    };
    return rainDrop;
}

function draw() {
    background(135, 206, 235); // Sky blue background
    
    // Draw the cloud
    drawClouds();

    // Move and draw all active raindrops
    for (let i = rainDrops.length - 1; i >= 0; i--) {
        let rainDrop = rainDrops[i];
        
        // Move the raindrop down
        rainDrop.y += rainDrop.velocity.y;

        // Draw the raindrop
        fill(rainDrop.fill);
        noStroke();
        ellipse(rainDrop.x, rainDrop.y, rainDrop.size, rainDrop.size);
    }
}

function drawClouds() {
    // Draw the clouds
    fill(255);
    noStroke();
    ellipse(100, 100, 80, 80);
    ellipse(130, 100, 80, 80);
}

function mousePressed() {
    // The center of cloud
    const cloudX = 115;
    const cloudY = 100;
    
    // Check the distance between the mouse and the center of the cloud
    const d = dist(mouseX, mouseY, cloudX, cloudY);
    
    // If the click is close enough to the cloud (radius roughly 50px)
    if (d < 50) {
        // Create a new raindrop starting right at the cloud
        const newRainDrop = {
            x: random(90, 140), 
            y: 120,             
            velocity: {
                x: 0,
                y: random(3, 8)
            },
            size: random(8, 15),
            fill: "#445566"
        };
        
        // Add it to our array
        rainDrops.push(newRainDrop);
    }
}

