const drawingCanvas = document.getElementById("drawingCanvas");
const message = document.getElementById("message");
const ctx = drawingCanvas.getContext("2d");

let isDrawing = false;
let points = [];
let startTime = 0;
let direction = null;
let maxTime = 5000;
const circleCheckThreshold = 0.2;

function resizeCanvas() {
  drawingCanvas.width = window.innerWidth;
  drawingCanvas.height = window.innerHeight;
}

function startDrawing(event) {
  isDrawing = true;
  points = [];
  startTime = Date.now();
  direction = null;
  points.push(getPoint(event));
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
}

function draw(event) {
  if (!isDrawing) return;

  const elapsed = Date.now() - startTime;
  if (elapsed > maxTime) {
    stopDrawing("Too slow");
    return;
  }

  const currentPoint = getPoint(event);
  points.push(currentPoint);

  if (points.length > 2 && direction === null) {
    const [p1, p2] = points.slice(-2);
    direction = getDirection(p1, p2);
    if (direction !== "counter-clockwise") {
      stopDrawing("Wrong way");
      return;
    }
  }

  ctx.lineTo(currentPoint.x, currentPoint.y);
  ctx.stroke();
}

function stopDrawing(resultMessage = null) {
  isDrawing = false;
  if (resultMessage) {
    message.textContent = resultMessage;
  } else if (points.length > 2) {
    const circleScore = calculateCircleScore(points);
    message.textContent = `You scored: ${Math.round(circleScore * 100)}%`;
  }
}

function getPoint(event) {
  const rect = drawingCanvas.getBoundingClientRect();
  const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
  const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;
  return { x, y };
}

function getDirection(p1, p2) {
  return (p2.x - p1.x) * (p2.y + p1.y) > 0 ? "clockwise" : "counter-clockwise";
}

function calculateCircleScore(points) {
  const { centerX, centerY, radius } = calculateBoundingCircle(points);
  let error = 0;

  points.forEach(({ x, y }) => {
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    error += Math.abs(distance - radius) / radius;
  });

  const averageError = error / points.length;
  return Math.max(0, 1 - averageError / circleCheckThreshold);
}

function calculateBoundingCircle(points) {
  const xs = points.map(p => p.x);
  const ys = points.map(p => p.y);

  const centerX = (Math.max(...xs) + Math.min(...xs)) / 2;
  const centerY = (Math.max(...ys) + Math.min(...ys)) / 2;

  const radius = Math.max(...xs.map(x => Math.abs(x - centerX)));

  return { centerX, centerY, radius };
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

drawingCanvas.addEventListener("mousedown", startDrawing);
drawingCanvas.addEventListener("mousemove", draw);
drawingCanvas.addEventListener("mouseup", () => stopDrawing());

drawingCanvas.addEventListener("touchstart", startDrawing);
drawingCanvas.addEventListener("touchmove", draw);
drawingCanvas.addEventListener("touchend", () => stopDrawing());