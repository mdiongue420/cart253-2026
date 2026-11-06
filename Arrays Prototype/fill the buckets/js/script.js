/**
 * Dots n Obstacles
 * Maimouna
 * 
 * dots move around the screen and avoid obstacles.
 */
"use strict";

let obstacles = []; // Array to hold all the obstacles

// Player dot setup (Added 'speed' property here!)
let playerDot = {
    x: 200,
    y: 200,
    speed: 4, // <--- This prevents the dot from disappearing
    size: 16,
    fill: "#FF4136"
};

// Time between obstacles
const minimumObstacleDelay = 1 * 1000;
const maximumObstacleDelay = 2 * 1000;
let obstacleDelay = maximumObstacleDelay;

function setup() {
    createCanvas(400, 400);
    setTimeout(addObstacle, obstacleDelay);
}

function addObstacle() {
    // Create and add an obstacle
    const obstacle = createObstacle();
    obstacles.push(obstacle);

    // Reduce the delay
    obstacleDelay -= random(0, 50);
    obstacleDelay = constrain(obstacleDelay, minimumObstacleDelay, maximumObstacleDelay);
    setTimeout(addObstacle, obstacleDelay);
}

function createObstacle() {
    const obstacle = {
        x: -50,                // Start off-screen on the left
        y: random(0, height),  // Random height on the screen
        velocity: {
            x: random(2, 5),   // Moves sideways
            y: 0 
        },
        size: random(20, 50),
        fill: "#445566",
        isMoving: true
    };
    return obstacle;
}

function draw() {
    background(220);

    // Move and draw the obstacles
    for (let obstacle of obstacles) {
        moveObstacle(obstacle);
        drawObstacle(obstacle);
    }

    // Update and draw the keyboard-controlled dot
    updatePlayerDot();
    drawPlayerDot();
}

function moveObstacle(obstacle) {
    if (obstacle.isMoving) {
        obstacle.x += obstacle.velocity.x; 
        obstacle.y += obstacle.velocity.y; 

        // Keep obstacles in the frame: if it goes off the right edge, wrap it back to the left
        if (obstacle.x > width) {
            obstacle.x = -obstacle.size;
            obstacle.y = random(0, height - obstacle.size); // Give it a new random height when it loops
        }
    }
}

function drawObstacle(obstacle) {
    push();
    noStroke();
    fill(obstacle.fill);
    rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
    pop();
}

/**
 * Updates the dot position using arrow keys and handles collisions
 */
function updatePlayerDot() {
    // Check arrow keys for movement
    if (keyIsDown(LEFT_ARROW)) {
        playerDot.x -= playerDot.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        playerDot.x += playerDot.speed;
    }
    if (keyIsDown(UP_ARROW)) {
        playerDot.y -= playerDot.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        playerDot.y += playerDot.speed;
    }

    // Keep the player dot strictly inside the canvas frame
    playerDot.x = constrain(playerDot.x, playerDot.size / 2, width - playerDot.size / 2);
    playerDot.y = constrain(playerDot.y, playerDot.size / 2, height - playerDot.size / 2);

    // Check collision against each obstacle so the player can't pass through them
    for (let obstacle of obstacles) {
        let closestX = constrain(playerDot.x, obstacle.x, obstacle.x + obstacle.size);
        let closestY = constrain(playerDot.y, obstacle.y, obstacle.y + obstacle.size);

        let distance = dist(playerDot.x, playerDot.y, closestX, closestY);
        let minDistance = playerDot.size / 2;

        if (distance < minDistance) {
            let angle = atan2(playerDot.y - closestY, playerDot.x - closestX);
            if (distance === 0) {
                angle = 0;
            }
            playerDot.x = closestX + cos(angle) * minDistance;
            playerDot.y = closestY + sin(angle) * minDistance;
        }
    }
}

/**
 * Draws the player dot
 */
function drawPlayerDot() {
    push();
    noStroke();
    fill(playerDot.fill);
    ellipse(playerDot.x, playerDot.y, playerDot.size, playerDot.size);
    pop();
}