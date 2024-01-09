var cajita;
let juegitos;
var mangos;
let pvp;

function initializeVariables() {
    cajita = 0;
    juegitos = 70;
    mangos = 30;
    pvp = 30;
}

function onPress(e) {
    switch (e.key) {
        case "a":
            moveLeft();
            console.log("move")
            break;

        case "d":
            moveRight();
            break;

        default:
            break;
    }
}

function moveLeft() {


    if (cajita== 0 || cajita < 0) {
     
        
    }else{
        cajita-=5;
        redraw();
    }

}

function moveRight() {
    if (cajita == 260 || cajita > 260) {
       
    } else {
        cajita += 5;
        redraw();
    }
}

function redraw() {
    toDraw.clearRect(0, 0, pepe.width, pepe.height);
    drawBackground(toDraw);
    toDraw.fillStyle = "#ff8000";
    toDraw.fillRect(cajita, juegitos, mangos, pvp);
}

function drawBackground(context) {
    context.fillStyle = "#88DC65";
    context.fillRect(0, 100, 380, 150);

    context.fillStyle = "#00AAE4";
    context.fillRect(0, 0, 300, 100);
}

function gameLoop() {
    redraw();
    requestAnimationFrame(gameLoop);
}

document.querySelector(".container").innerHTML = "<canvas id='miGame'></canvas>";
const pepe = document.getElementById("miGame");
const toDraw = pepe.getContext("2d");

initializeVariables();
drawBackground(toDraw);

toDraw.fillStyle = "#ff8000";

document.addEventListener("keydown", onPress);
gameLoop();
