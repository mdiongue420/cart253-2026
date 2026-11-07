/**
 * Blocks
 * Maimouna
 * 
 * inspired by pippin barr's "squish bugs".
 * blocks fall down the screen n when key is pressed they stop moving.
 */

"use strict";
let blocks = []; // Array to hold all the blocks

// Time between blocks
const minimumBlockDelay = 1 * 1000;
const maximumBlockDelay = 2 * 1000;
let blockDelay = maximumBlockDelay;

function setup() {
    createCanvas(400, 400);
    setTimeout(addBlock, blockDelay);
}

function addBlock() {
    // Create and add a block
    const block = createBlock();
    blocks.push(block);

    // Reduce the delay
    blockDelay -= random(0, 100);
    // Constrain it (so they don't come TOO fast)
    blockDelay = constrain(blockDelay, minimumBlockDelay, maximumBlockDelay);
    // Set the new timeout
    setTimeout(addBlock, blockDelay);
}

function createBlock() {
    const block = {
        x: random(0, width),
        y: -100,
        velocity: {
            x: 0,
            y: random(2, 10)
        },
        size: random(15, 40),
        fill: "#445566",
        isMoving: true 
    };
    return block;
}

function draw() {
    background(220);
    // Move and draw the blocks
    for (let block of blocks) {
        moveBlock(block);
        drawBlock(block);
    }
}

/**
 * Moves a block according to its velocity (if it's allowed to move)
 */
function moveBlock(block) {
    if (block.isMoving) {
        block.x += block.velocity.x;
        block.y += block.velocity.y;
    }
}

/**
 * Draws a block according to its properties
 */
function drawBlock(block) {
    push();
    noStroke();
    fill(block.fill);
    rect(block.x, block.y, block.size, block.size);
    pop();
}

/**
 * Stops blocks if click (near) them
 */
function mousePressed() {
    for (let block of blocks) {
        const d = dist(mouseX, mouseY, block.x, block.y);
        
        if (d < block.size * 2) {
            block.isMoving = false; // stop the block from moving
        }
    }
}