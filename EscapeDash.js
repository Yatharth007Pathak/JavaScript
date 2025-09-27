window.addEventListener("load", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const GAME_WIDTH = 640;
  const GAME_HEIGHT = 360;

  let gameLive = true;
  let level = 1;
  let life = 5;

  // Player object
  const player = { x: 10, y: 160, w: 40, h: 40, speedX: 3, isMoving: false };

  // Enemies
  const enemies = [
    { x: 100, y: 100, w: 40, h: 40, speedY: 2, color: "rgb(255,80,80)" },
    { x: 200, y: 50, w: 40, h: 40, speedY: 3, color: "rgb(255,140,0)" },
    { x: 330, y: 150, w: 40, h: 40, speedY: 2, color: "rgb(255,0,255)" },
    { x: 450, y: 100, w: 40, h: 40, speedY: -2, color: "rgb(0,150,255)" }
  ];

  // Goal
  const goal = { x: 580, y: 160, w: 50, h: 36, blink: true };

  let playerColor = getRandomColor();
  let blinkCounter = 0;

  function getRandomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  }

  function checkCollision(a, b) {
    return a.x < b.x + b.w &&
           a.x + a.w > b.x &&
           a.y < b.y + b.h &&
           a.y + a.h > b.y;
  }

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (e.code === "Space") player.isMoving = true;
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === "Space") player.isMoving = false;
  });

  function update() {
    // Player reaches goal
    if (checkCollision(player, goal)) {
      level++;
      life++;
      player.speedX += 0.5;
      player.x = 10;
      player.y = 160;
      player.isMoving = false;
      playerColor = getRandomColor();
      enemies.forEach(e => e.speedY += e.speedY > 0 ? 0.5 : -0.5);
      alert(`Level Up! Welcome to Level ${level}`);
    }

    // Move player
    if (player.isMoving) player.x += player.speedX;

    // Enemy movement and collisions
    enemies.forEach(enemy => {
      enemy.y += enemy.speedY;
      if (enemy.y <= 0 || enemy.y >= GAME_HEIGHT - enemy.h) enemy.speedY *= -1;

      if (checkCollision(player, enemy)) {
        life--;
        playerColor = getRandomColor();
        player.x = 10;
        player.y = 160;
        player.isMoving = false;
        if (life <= 0) resetGame();
      }
    });

    // Goal blinking effect
    blinkCounter++;
    if (blinkCounter % 30 === 0) goal.blink = !goal.blink;
  }

  function resetGame() {
    alert("Game Over!");
    level = 1;
    life = 5;
    player.speedX = 3;
    player.x = 10;
    player.y = 160;
    player.isMoving = false;
    playerColor = getRandomColor();
    enemies.forEach(e => e.speedY = Math.sign(e.speedY) * 2);
  }

  function draw() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // HUD
    ctx.font = "16px Verdana";
    ctx.fillStyle = "#ffcc00";
    ctx.fillText(`Level: ${level}`, 10, 20);
    ctx.fillText(`Life: ${life}`, 10, 40);
    ctx.fillText(`Speed: ${player.speedX.toFixed(1)}`, 10, 60);

    // Player
    ctx.fillStyle = playerColor;
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // Enemies
    enemies.forEach(e => {
      ctx.fillStyle = e.color;
      ctx.fillRect(e.x, e.y, e.w, e.h);
    });

    // Goal
    if (goal.blink) ctx.fillStyle = "rgb(0,200,100)";
    else ctx.fillStyle = "rgb(0,150,50)";
    ctx.fillRect(goal.x, goal.y, goal.w, goal.h);

    ctx.fillStyle = "#000";
    ctx.fillText("GOAL", goal.x + 5, goal.y + 25);
  }

  function gameLoop() {
    update();
    draw();
    if (gameLive) requestAnimationFrame(gameLoop);
  }

  gameLoop();
});
