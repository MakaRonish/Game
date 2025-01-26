const CanvasHeight = 600;
const Canvasweidth = 600;
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const playerImage = new Image();
playerImage.src = "images/spritesheet.png";



let i = 0
let gameframe = 0;
function animation() {
    ctx.clearRect(0, 0, 600, 600)

    if (gameframe % 15 === 0) {
        i++;
        if (i > 4) {
            i = 0;
        }
    }

    ctx.drawImage(playerImage, 151 * i, 185 * 4, 151, 200, 0, 0, 300, 185)
    requestAnimationFrame(animation)

    gameframe++


}
animation()