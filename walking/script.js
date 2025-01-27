// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// const hero = new Image();
// hero.src = 'image.png';

// const CANVAS_HEIGHT = canvas.height = 500;
// const CANVAS_WIDTH = canvas.width = 500;

// const idle = new Image()
// idle.src = 'idle.png'

// let i = 0
// let gameFrame = 0;
// let xcord = 0;
// let ycord = 0;
// let charheight = 105;
// let charwidth = 82;



// function walking() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     if (gameFrame % 10 == 0) {
//         i++
//         if (i > 4) i = 0;
//     }
//     ctx.drawImage(hero, i * 82, 0, 82, 105, xcord, ycord, charwidth, charheight);
//     gameFrame++
//     requestAnimationFrame(walking);
// }


// let j = 0;
// let gameFrames = 0;
// function idlemove() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     if (gameFrames % 10 == 0) {
//         j++
//         if (j > 3) j = 0
//     }
//     ctx.drawImage(idle, 83 * j, 0, 83, 97, 0, 0, 83, 97)
//     gameFrames++
//     requestAnimationFrame(idlemove)

// }


// document.addEventListener('keydown', (event) => {
//     if (event.key == 's') {
//         if (ycord < CANVAS_HEIGHT - charheight) ycord += 1
//         walking()
//     } else if (event.key == 'w') {
//         if (ycord > 0) ycord -= 1
//         walking()

//     } else if (event.key == 'a') {
//         if (xcord > 0) xcord -= 1
//         walking()
//     } else if (event.key == 'd') {
//         if (xcord < CANVAS_WIDTH - charwidth) xcord += 1
//         walking()
//     } else {
//         idlemove()
//     }
// })


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const hero = new Image();
hero.src = 'image.png';

const idle = new Image();
idle.src = 'idle.png';

const CANVAS_HEIGHT = canvas.height = 500;
const CANVAS_WIDTH = canvas.width = 500;

let xcord = 0;
let ycord = 0;
let charheight = 105;
let charwidth = 82;

let i = 0; // Walking animation frame
let gameFrame = 0; // Frame counter for walking animation

let j = 0; // Idle animation frame
let gameFrames = 0; // Frame counter for idle animation

let isMoving = false; // Boolean to track if the character is moving

// Make sure images are loaded before starting animation
hero.onload = () => {
    idle.onload = () => {
        animate(); // Start the animation loop once images are loaded
    };
};

// Main game loop
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Handle walking animation if moving
    if (isMoving) {
        if (gameFrame % 10 === 0) {
            i++;
            if (i > 4) i = 0; // Loop through the walking animation frames
        }
        ctx.drawImage(hero, i * 82, 0, 82, 105, xcord, ycord, charwidth, charheight); // Walking animation
    } else {
        // Handle idle animation when not moving
        if (gameFrames % 10 === 0) {
            j++;
            if (j > 3) j = 0; // Loop through the idle animation frames
        }
        ctx.drawImage(idle, 83 * j, 0, 83, 97, xcord, ycord, charwidth, charheight); // Idle animation
    }

    gameFrame++;
    gameFrames++;
    requestAnimationFrame(animate); // Call the animation loop
}

// Movement handling
document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.key === 's') {
        if (ycord < CANVAS_HEIGHT - charheight) ycord += 1;
        isMoving = true; // Character is moving
    } else if (event.key === 'w') {
        if (ycord > 0) ycord -= 1;
        isMoving = true; // Character is moving
    } else if (event.key === 'a') {
        if (xcord > 0) xcord -= 1;
        isMoving = true; // Character is moving
    } else if (event.key === 'd') {
        if (xcord < CANVAS_WIDTH - charwidth) xcord += 1;
        isMoving = true; // Character is moving
    } else if (event.key === ' ') {
        if (xcord < CANVAS_WIDTH - charwidth) xcord += 100;
        isMoving = true;
    }
});

// Reset movement state when the key is released
document.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
        isMoving = false; // Stop the walking animation and go to idle when no key is pressed
    }
});
