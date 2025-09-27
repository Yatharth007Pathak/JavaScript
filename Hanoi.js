var ctx;
var t = []; //value = number of tower (0-2); index = number of plate (0-2)
var counter;
var binary;
var n = 4; //number of plates
var step;
var clock;
var speed = 10;


function start(){
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    reset();

}

function reset(){
    t.length = n;
    counter = 0;
    for(var i=0; i<n; i++){
        t[i] = 0;
    }
    clearInterval(clock);
    clock = setInterval(main, (50000/Math.sqrt(Math.pow(2,n)))/speed);
    draw();
}

function main(){
    //give the string "binary" it's value
    binary = counter.toString(2);
    binary = Array(n+1-binary.length).join("0")+binary;
    //finding out what step needs to be done
    step = binary.lastIndexOf(0);
    step = binary.length-1-step;
    if(step==0){
        t[0] = (t[0]+1)%3; //moving plate 0 to the right
    }else if(step<n){
        t[step] = 3-t[0]-t[step]; // moving the right plate to the only possible spot
    }else{
        stop();
        counter--;
    }
    counter++;
    draw();
}

function stop(){
    clearInterval(clock);
}

function draw(){
    //clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSticks();
    drawPlates();
    writeStep();
}

function drawSticks(){
    ctx.fillStyle = "#36382F";
    //drawing the sticks
    ctx.beginPath();
    ctx.rect(50,20,10,100);
    ctx.rect(160,20,10,100);
    ctx.rect(270,20,10,100);
    ctx.fill();
    //drawing the stick bases
    ctx.rect(10,120,90,10);
    ctx.rect(120,120,90,10);
    ctx.rect(230,120,90,10);
    ctx.fill();
}

function drawPlates(){
    //calculating plate thickness
    var thick = Math.floor((90-n)/n)
    if(thick>15){
        thick = 15;
    }
    //Height of each tower
    var height = [0,0,0];
    //drawing plates
    for(var i=n-1;i>=0;i--){
        ctx.beginPath();
        var width = 20+i*(60/(n-1));
        ctx.rect((t[i]*110+50)-((width-10)/2),119-height[t[i]]-thick,width,thick);
        ctx.fillStyle = "hsla("+i*(360/n)+", 100%, 50%, 0.8)";
        ctx.fill();
        height[t[i]] += thick+1;
    }
}

function writeStep(){
    ctx.beginPath();
    ctx.font = '12pt Calibri';
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(counter, 290, 20);
}

function validate(){
    var newN = document.getElementById("n").value;
    if(2<=newN&&45>=newN){
        n = newN;
        reset();
    }else{
        alert("Your input is not legal. It needs to be a number between 2 and 45!");
    }
}

function slider(){
    speed = parseInt(document.getElementById("s").value);
    clearInterval(clock);
    clock = setInterval(main, (50000/Math.sqrt(Math.pow(2,n)))/speed);
}