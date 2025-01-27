/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;
const numberOfEnemies = 10;
const enemiesArray = []

// const enemyImage = new Image();
// enemyImage.src = 'enemies/enemy1.png'
let gameFrame = 0;

// enemy1 = {
//     x: 0,
//     y: 0,
//     width: 200,
//     height: 200,
// }

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemies/enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 1;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);


    }
    update() {
        this.x -= this.speed;
        if (this.x + this.width < 0) this.x = canvas.width;
        this.y += Math.random() * 10 - 5;
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        // ctx.strokeRect(this.x, this.y, this.width, this.height)


        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)


    }
}

for (let i = 0; i <= numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());

}
console.log(enemiesArray)
let xcord, ycord;
xcord = 0;
ycord = 0;
let charWidth, charHeight;
charWidth = 90;
charHeight = 90;

function movement() {
    document.addEventListener('keydown', (event) => {

        if (event.key == 'ArrowRight' || event.key == 'd') {
            if (xcord < CANVAS_WIDTH - charWidth) xcord += 10;


        } else if (event.key == 'ArrowLeft' || event.key == 'a') {
            if (xcord > 0) xcord -= 10;



        } else if (event.key == 'ArrowDown' || event.key == 's') {
            if (ycord < CANVAS_HEIGHT - charHeight) ycord += 10;


        } else if (event.key == 'ArrowUp' || event.key == 'w') {
            if (ycord > 0) ycord -= 10;


        }

    })

}
movement()

const hero = new Image();
hero.src = 'image.png';



function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemiesArray.forEach((enemy) => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++;

    ctx.fillRect(xcord, ycord, charWidth, charHeight);


    requestAnimationFrame(animate)
}
animate()
