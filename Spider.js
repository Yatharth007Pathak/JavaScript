alert("This Game runs on both touch devices and keyboard devices.\n\n1) For Keyboard you have to use arrows.\n\n2) For Touch devices click on a path of Carlin you want to move\n\nHurrah! You may enjoy game now.\n\nThanks a lot.")

alert("Game Rules:\n\n 1) You have a player named Carlin . Carlin want to go to the orange door by hiding himself from spiders. \n\nHelp him to go!!!\n\nAlert!! Alert!!\nControls implementation is new. \n\nFor move forward you have to Click in Front of Carlin direction or click back for backward move, click left in carlin direction for left and same for right.\n\nThis control make game strategic and not too easy.")


function wraper(){
const canvas      = document.getElementById("canvas");
const ctx         = canvas.getContext("2d")
const windowWidth = document.body.clientWidth
if(windowWidth < innerHeight){
    canvas.width  = (windowWidth - 10) *2
    canvas.height = canvas.width 

    canvas.style.width = windowWidth - 10 + "px"
    canvas.style.height = windowWidth - 10 + "px"

}

const canvas_width  = canvas.width
const canvas_height = canvas.height

// hall top size of black space
const HALL_TOP = canvas_height * 0.1;
function drawBlackSpace() {
    // create black rectangle at canvas top
    ctx.fillStyle = "black";
    // draw rectangle at top and bottom of canvas
    ctx.fillRect(0, 0, canvas_width, HALL_TOP);
    ctx.fillRect(0, canvas_height - HALL_TOP, canvas_width, HALL_TOP);
    // level text
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.fillText(`Level : ${level}`, canvas_width / 2 - 30, canvas_height - HALL_TOP / 3);
}

// draw hall
const HALL = {
    x: 0,
    y: HALL_TOP,
    width: canvas_width,
    height: canvas_height - HALL_TOP * 2
}
const NUM_ROWS = 9
const NUM_COLS = 9
const GRID_WIDTH = HALL.width / NUM_COLS;
const GRID_HEIGHT = HALL.height / NUM_ROWS;
let grid = [];
let once = 1; // only run once
let onceGridDefine = 1
function drawHall(){
    // draw hall
    ctx.fillStyle = "rgb(192,192,192)";
    ctx.fillRect(HALL.x, HALL.y, HALL.width, HALL.height);

    // create grid NUM_ROWS * NUM_COLS
    for (let row = 0; row < NUM_ROWS; row++) {
        if(onceGridDefine)    grid.push(new Array())
        for (let col = 0; col < NUM_COLS; col++) {
            let isPath = 1;
            // draw grid
            ctx.fillStyle = "rgb(192,192,192)";
            // grey cell is walking area for game characters
            // brown color is obstacles
            if(col % 2 !== 0 && row % 2 !== 0){
                ctx.fillStyle = "rgb(139,69,18)";
                isPath = 0; 
            }
            
            ctx.fillRect(HALL.x + col * GRID_WIDTH, HALL.y + row * GRID_HEIGHT, GRID_WIDTH, GRID_HEIGHT);
            if(onceGridDefine)
                grid[row].push({
                    x: HALL.x + col * GRID_WIDTH,
                    y: HALL.y + row * GRID_HEIGHT,
                    cell: isPath
                });
        }
    }
    onceGridDefine = 0;
}

// draw player carlin
let CARLIN = {
    x: 0,
    y: 0,
    r: GRID_WIDTH / 4,
    row: null, // row of carlin
    col: null // col of carlin
}
function drawCarlin(){
    if(once){
        let bottom_grid = grid[grid.length - 1]
        const randInt = ()=>Math.floor(Math.random() * bottom_grid.length)
        const i = randInt()
        // gets random integer between 0 and 9
        let random_grid_cell = bottom_grid[i]
            CARLIN.x = random_grid_cell.x
            CARLIN.y = random_grid_cell.y
            CARLIN.row = grid.length - 1
            CARLIN.col = i
    }

    // draw white circle
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(CARLIN.x + GRID_WIDTH / 2, CARLIN.y + GRID_HEIGHT / 2, CARLIN.r, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.stroke();
    // stroke width
    ctx.fill();

    // draw circle inside white circle
    const drawEyes = ()=>{
        ctx.fillStyle = "black";
        ctx.beginPath();
        let n = 1;
        do ctx.arc(CARLIN.x + GRID_WIDTH/3 * n, CARLIN.y - 5 + GRID_HEIGHT / 2, 2, 0, 2 * Math.PI);
        while(n++ < 2);
        ctx.fill();
    }
    drawEyes();
}

// draw spider
class Spider{

    constructor(speed = 10){
        this.x = 0;
        this.y = 0;
        this.r= GRID_WIDTH / 4;
        this.row= 0;
        this.col= null;
        this.speed= speed;
    }
    drawSpider(){
        if(once){
            let top_grid_cells = grid[0]
            // random number between 0 and 9

            const randInt = ()=>Math.floor(Math.random() * top_grid_cells.length)
            let i = randInt()
            // gets random integer between 0 and 9
            let random_grid_cell = top_grid_cells[i]
                this.x = random_grid_cell.x
                this.y = random_grid_cell.y
                this.row = 0
                this.col = i
        }

        // create oval shape
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,0,0,${level < 9 ? 1 - level / 10 : 0.3})`;
        ctx.arc(this.x + GRID_WIDTH / 2, this.y + GRID_HEIGHT / 2, this.r, 0, 2 * Math.PI);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fill();

        // draw circle inside white circle
        const drawEyes = ()=>{
            ctx.fillStyle = "white";
            ctx.beginPath();
            let n = 1;
            do ctx.arc(this.x + GRID_WIDTH/3 * n, this.y - 2 + GRID_HEIGHT / 2, 2, 0, 2 * Math.PI);
            while(n++ < 2);
            ctx.fill();
        }
        drawEyes();

    }


    // automate spider movement
    SpiderMove(){
        let randDir = Math.floor(Math.random()*4)

        switch(randDir){
            case 0:
                if(this.row !== 0 && grid[this.row-1][this.col].cell){
                    this.y -= GRID_HEIGHT;
                    this.row -= 1;
                }
                break;
            case 1:
                if(this.col + 1 < NUM_COLS && grid[this.row][this.col+1].cell){
                    this.x += GRID_WIDTH;
                    this.col += 1;
                }
                break;
            case 2:
                if(this.row + 1 < NUM_ROWS && grid[this.row + 1][this.col] && grid[this.row + 1][this.col].cell){
                    this.y += GRID_HEIGHT;
                    this.row += 1;
                }
                break;
            case 3:
                if(this.col !== 0 && grid[this.row][this.col-1] && grid[this.row][this.col-1].cell){
                    this.x -= GRID_WIDTH;
                    this.col -= 1;
                }
                break;

        }
        lose()
    }
}


// draw door
const DOOR_WIDTH = canvas_width * 0.25;
const DOOR_HEIGHT = HALL_TOP * 0.3;
let door_x = 0
function drawDoor(){
    if(once)
     door_x = Math.floor(Math.random() * (canvas_width - DOOR_WIDTH))
    // draw rectangle at top of canvas and bottom of HALL_TOP
    ctx.fillStyle = "orange";
    ctx.fillRect(door_x , HALL_TOP - DOOR_HEIGHT, DOOR_WIDTH, DOOR_HEIGHT);
    ctx.fill()
}


// carlin movement
function CarlinMove(keyCode){
  
    switch(keyCode){
        case 37:
            if(CARLIN.col!==0 && grid[CARLIN.row][CARLIN.col-1].cell){
                CARLIN.x -= GRID_WIDTH;
                CARLIN.col -= 1;
            }
            break;
        case 38:
            if(CARLIN.row !== 0 && grid[CARLIN.row-1][CARLIN.col].cell){
                CARLIN.y -= GRID_HEIGHT;
                CARLIN.row -= 1;
            }
            break;
        case 39:
            if(CARLIN.col + 1 < NUM_COLS && grid[CARLIN.row][CARLIN.col+1].cell){
                CARLIN.x += GRID_WIDTH;
                CARLIN.col += 1;
            }
            break;
        case 40:
            if(CARLIN.row + 1 < NUM_ROWS && grid[CARLIN.row + 1][CARLIN.col].cell){
                CARLIN.y += GRID_HEIGHT;
                CARLIN.row += 1;
            }
            break;
    }
    lose()
    if(!islose)
        win()
}
document.addEventListener("keydown", e=>{
    if(iswin || islose) return;
    const keyCode = e.keyCode;
    CarlinMove(keyCode);
})


// swipe detection
let x = null;
let y = null;

document.addEventListener("touchstart", e=>{
    if(iswin || islose) return;
    const touch = e.touches[0];
    x = touch.clientX*2;
    
    y = touch.clientY*2;
    let keycode = 0;
    const cy = canvas.getBoundingClientRect().y
     const cx = canvas.getBoundingClientRect().x
     
     //console.log(x ,CARLIN.x)
    
    if(x - cx< CARLIN.x && y-cy > CARLIN.y + HALL_TOP && y-cy< CARLIN.y+GRID_HEIGHT*2 )
        keycode = 37
    else if(x - cx> CARLIN.x && y-cy< CARLIN.y+GRID_HEIGHT*2 && y-cy > CARLIN.y + HALL_TOP )
        keycode = 39
    else if(y - cy > CARLIN.y + GRID_WIDTH  && x - cx< CARLIN.x+ GRID_WIDTH && x - cx> CARLIN.x)
        keycode = 40
    else if(y - cy  < CARLIN.y+GRID_WIDTH && x - cx< CARLIN.x+ GRID_WIDTH && x - cx> CARLIN.x)
        keycode = 38
  
        
    CarlinMove(keycode )
})


let iswin = 0
var level = 1
// wining condition
function win(){
    if(CARLIN.row === 0){
        if(CARLIN.x + 10>= door_x && CARLIN.x + GRID_WIDTH - 10 <= door_x + DOOR_WIDTH){
            iswin = 1
        }else{
            iswin = 0
        }
    }
}
function drawWin(){
    // draw wining rectangle
    ctx.fillStyle = "rgba(0,255,0,0.2)";
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    ctx.fill()
    // create text win
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("You Win!", canvas_width / 2 - 50, canvas_height / 2);
    ctx.font = "18px Arial";
    ctx.fillText("Next Level in 3s", canvas_width / 2 - 60, canvas_height/2 + 30)

    setTimeout(()=>{
        iswin = 0
        islose = 0
        birthSpiders(spiders.length + 1)
        level++;
        loop()
    }, 2000)
    ctx.fill()
    cancelAnimationFrame(looprun)
    
}

let islose = 0
// lose condition
function lose(){
    spiders.forEach(spider=>{
        if(CARLIN.row === spider.row && CARLIN.col === spider.col){
            islose = 1
        }
    })
}
function drawLose(){
    // draw wining rectangle
    ctx.fillStyle = "rgba(255,0,0,0.2)";
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    ctx.fill()
    // create text win
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("You Lose!", canvas_width / 2 - 50, canvas_height / 2);
    ctx.font = "18px Arial";
    ctx.fillText("Try again in 3s", canvas_width / 2 - 40, canvas_height / 2 + 25);
    ctx.fill()
    setTimeout(()=>{
        iswin = 0
        islose = 0
        birthSpiders(spiders.length)
        loop()
    }, 3000)

    cancelAnimationFrame(looprun)
}

let runs = 0
let spiders = []

function birthSpiders(n, ns=10){//ns - initial speed
    spiders.length = 0

    for(let i=0; i < n; i++){
        var SPIDER1 = new Spider(ns * (i+1))
        spiders.push(SPIDER1)
        once = 1
    }
}

var looprun = null;
function loop(){
    looprun = requestAnimationFrame(loop)

    runs++;
    // clear canvas 
    ctx.clearRect(0, 0, canvas_width, canvas_height);

    // draw black space
    drawBlackSpace();
    drawDoor();
    drawHall();
    drawCarlin();
    spiders.forEach(spider=>{
        if(runs% spider.speed === 0 && !islose && !iswin)
            spider.SpiderMove()
        spider.drawSpider()
    })
    
    if(iswin)
        drawWin();
    if(islose)
        drawLose();        
    once = 0
    
}
loop()
birthSpiders(2)
}

window.addEventListener("load", wraper)