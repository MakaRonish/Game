const CanvasHeight = 600;
const Canvasweidth = 600;
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const playerImage = new Image();
playerImage.src = "images/spritesheet.png";




function animation() {
    ctx.clearRect(0, 0, 600, 600)
    ctx.drawImage(playerImage, 0, 0, 210, 270 * 2, 0, 0, 210, 165)
    requestAnimationFrame(animation)


}
animation()