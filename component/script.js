
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = canvas.height = 600;
const CANVAS_WIDTH = canvas.width = 600;




let xcord, ycord;
xcord = 0;
ycord = 0;

function movement() {
    document.addEventListener('keydown', (event) => {

        if (event.key == 'ArrowRight' || event.key == 'd') {
            if (xcord < 500) xcord += 10;


        } else if (event.key == 'ArrowLeft' || event.key == 'a') {
            if (xcord > 0) xcord -= 10;



        } else if (event.key == 'ArrowDown' || event.key == 's') {
            if (ycord < 500) ycord += 10;


        } else if (event.key == 'ArrowUp' || event.key == 'w') {
            if (ycord > 0) ycord -= 10;


        }

    })

}
movement()


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = 'red';
    ctx.fillRect(xcord, ycord, 100, 100);

    requestAnimationFrame(animate)


}
animate()
