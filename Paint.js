// Array to store ongoing touch points
var arr_touches = [];

// Canvas and context variables
var canvas;
var ctx;

// Mouse and touch event flags
var down = false; // Mouse is pressed
var color = 'black'; // Default drawing color
var width = 5; // Default drawing width
var isEraser = false; // Flag for eraser tool

// Initialize the canvas and add event listeners
window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = width;

    // Handling mouse events for drawing
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);

    // Handling touch events for mobile devices
    canvas.addEventListener("touchstart", handleStart, false);
    canvas.addEventListener("touchend", handleEnd, false);
    canvas.addEventListener("touchcancel", handleCancel, false);
    canvas.addEventListener("touchleave", handleEnd, false);
    canvas.addEventListener("touchmove", handleTouchMove, false);
};

// Handle mouse movements for drawing
function handleMove(e) {
    var xPos = e.clientX - canvas.offsetLeft;
    var yPos = e.clientY - canvas.offsetTop;

    if (down) {
        ctx.lineTo(xPos, yPos);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }
}

// Handle mouse down event to start drawing
function handleDown(e) {
    down = true;
    var xPos = e.clientX - canvas.offsetLeft;
    var yPos = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
}

// Handle mouse up event to stop drawing
function handleUp() {
    down = false;
}

// Handle touch start for mobile devices
function handleStart(evt) {
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        if (isValidTouch(touches[i])) {
            evt.preventDefault();
            arr_touches.push(copyTouch(touches[i]));
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
}

// Handle touch move for mobile devices
function handleTouchMove(evt) {
    var touches = evt.changedTouches;
    var offset = findPos(canvas);
    for (var i = 0; i < touches.length; i++) {
        if (isValidTouch(touches[i])) {
            evt.preventDefault();
            var idx = ongoingTouchIndexById(touches[i].identifier);
            if (idx >= 0) {
                ctx.beginPath();
                ctx.moveTo(arr_touches[idx].clientX - offset.x, arr_touches[idx].clientY - offset.y);
                ctx.lineTo(touches[i].clientX - offset.x, touches[i].clientY - offset.y);
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                ctx.stroke();
                arr_touches.splice(idx, 1, copyTouch(touches[i]));
            }
        }
    }
}

// Handle touch end event for mobile devices
function handleEnd(evt) {
    var touches = evt.changedTouches;
    var offset = findPos(canvas);
    for (var i = 0; i < touches.length; i++) {
        if (isValidTouch(touches[i])) {
            evt.preventDefault();
            var idx = ongoingTouchIndexById(touches[i].identifier);
            if (idx >= 0) {
                ctx.lineWidth = 4;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(arr_touches[idx].clientX - offset.x, arr_touches[idx].clientY - offset.y);
                ctx.lineTo(touches[i].clientX - offset.x, touches[i].clientY - offset.y);
                arr_touches.splice(i, 1);
            }
        }
    }
}

// Handle touch cancel event
function handleCancel(evt) {
    evt.preventDefault();
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
        arr_touches.splice(i, 1);
    }
}

// Copy touch information
function copyTouch(touch) {
    return {identifier: touch.identifier, clientX: touch.clientX, clientY: touch.clientY};
}

// Find ongoing touch by ID
function ongoingTouchIndexById(idToFind) {
    for (var i = 0; i < arr_touches.length; i++) {
        var id = arr_touches[i].identifier;
        if (id == idToFind) {
            return i;
        }
    }
    return -1;
}

// Change the drawing color
function changeColor(new_color) {
    color = new_color;
}

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Switch between drawing and erasing
function toggleEraser() {
    isEraser = !isEraser;
    color = isEraser ? 'white' : color; // Set the color to white for erasing
    width = isEraser ? 10 : 5; // Increase width for eraser
}

// Check if touch is within canvas bounds
function isValidTouch(touch) {
    var offset = findPos(canvas);
    if (touch.clientX - offset.x > 0 &&
        touch.clientX - offset.x < parseFloat(canvas.width) &&
        touch.clientY - offset.y > 0 &&
        touch.clientY - offset.y < parseFloat(canvas.height)) {
        return true;
    } else {
        return false;
    }
}

// Find the position of the canvas relative to the page
function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);

        return { x: curleft - document.body.scrollLeft, y: curtop - document.body.scrollTop };
    }
}

// Save the drawing to an image
function saveDrawing() {
    var dataURL = canvas.toDataURL();
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
}
