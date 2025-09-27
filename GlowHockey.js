window.addEventListener('load', function() {
alert("Touch the ball to start the game. Score 7 goals to win. \nEnjoy!")
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state object
const game = {
    player: { x: 0, y: 0, radius: 30, score: 0 },
    ai: { x: 0, y: 0, radius: 30, score: 0 },
    ball: { 
        x: 0, 
        y: 0, 
        radius: 15, 
        vx: 0, 
        vy: 0,
        maxSpeed: 14,
        minSpeed: 8
    },
    gameRunning: false,
    gameStarted: false,
    winScore: 7,
    lastScorer: null,
    aiDifficulty: 0.7,
    ballGlow: 0
};

function resizeCanvas() {
    const container = document.querySelector('.game-container');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    // Reposition game objects after resize
    game.player.x = canvas.width / 2;
    game.player.y = canvas.height * 0.85;
    game.ai.x = canvas.width / 2;
    game.ai.y = canvas.height * 0.15;
    resetBallPosition();
}

function resetBallPosition() {
    game.ball.x = canvas.width / 2;
    game.ball.y = canvas.height / 2;
    game.ball.vx = 0;
    game.ball.vy = 0;
    game.ballGlow = 0;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function resetBall(nextServer = null) {
    resetBallPosition();
    game.gameRunning = false;
    const gameStatus = document.getElementById('gameStatus');
    
    if (nextServer === 'player') {
        gameStatus.textContent = 'Touch the ball to serve!';
        gameStatus.style.display = 'block';
        gameStatus.style.top = "70%";
    } else if (nextServer === 'ai') {
        gameStatus.textContent = 'Computer serves next...';
        gameStatus.style.display = 'block';
        gameStatus.style.top = "30%";
        
        setTimeout(() => {
            if (!game.gameRunning) {
                startBallMovement('ai');
            }
        }, 1500);
    } else {
        gameStatus.textContent = 'Touch the ball to start!';
        gameStatus.style.display = 'block';
    }
}

function startBallMovement(server) {
    const angle = (Math.random() - 0.5) * Math.PI / 4;
    const speed = game.ball.minSpeed;
    
    if (server === 'player') {
        game.ball.vx = Math.sin(angle) * speed;
        game.ball.vy = -Math.cos(angle) * speed;
    } else {
        game.ball.vx = Math.sin(angle) * speed;
        game.ball.vy = Math.cos(angle) * speed;
    }
    
    game.gameRunning = true;
    game.gameStarted = true;
    gameStatus.style.display = 'none';
}

function drawField() {
    // Main field background
    ctx.fillStyle = '#001a33';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Field borders with glow effect
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#ff0066');
    gradient.addColorStop(0.5, '#00ffff');
    gradient.addColorStop(1, '#00ff66');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 8;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    // Center line with dashed effect
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 4;
    ctx.setLineDash([15, 15]);
    ctx.beginPath();
    ctx.moveTo(20, canvas.height / 2);
    ctx.lineTo(canvas.width - 20, canvas.height / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Center circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
    ctx.stroke();
    
    // Goals
    const goalWidth = canvas.width * 0.5;
    const goalX = (canvas.width - goalWidth) / 2;
    
    // AI goal (top)
    ctx.strokeStyle = '#00ff66';
    ctx.lineWidth = 7;
    ctx.strokeRect(goalX, 0, goalWidth, 25);
    ctx.fillStyle = 'rgba(0, 255, 102, 0.1)';
    ctx.fillRect(goalX, 0, goalWidth, 25);
    
    // Player goal (bottom)
    ctx.strokeStyle = '#ff0066';
    ctx.strokeRect(goalX, canvas.height - 25, goalWidth, 25);
    ctx.fillStyle = 'rgba(255, 0, 102, 0.1)';
    ctx.fillRect(goalX, canvas.height - 25, goalWidth, 25);
}

function drawPaddle(paddle, color, isPlayer = false) {
    // Outer glow
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    
    // Main paddle body
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(paddle.x, paddle.y, paddle.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner ring
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(paddle.x, paddle.y, paddle.radius - 8, 0, Math.PI * 2);
    ctx.stroke();
    
    // Center dot
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(paddle.x, paddle.y, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 0;
}

function drawBall() {
    game.ballGlow += 0.1;
    const glowIntensity = Math.sin(game.ballGlow) * 10 + 15;
    
    // Ball glow effect
    ctx.shadowColor = '#ffff00';
    ctx.shadowBlur = glowIntensity;
    
    // Main ball
    ctx.fillStyle = '#ffff00';
    ctx.beginPath();
    ctx.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Ball border
    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Ball highlight
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(game.ball.x - 4, game.ball.y - 4, 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowBlur = 0;
}

function updateBall() {
    if (!game.gameRunning) return;
    
    game.ball.x += game.ball.vx;
    game.ball.y += game.ball.vy;
    
    // Side wall collisions
    if (game.ball.x <= game.ball.radius || game.ball.x >= canvas.width - game.ball.radius) {
        game.ball.vx *= -0.9;
        game.ball.x = Math.max(game.ball.radius, Math.min(canvas.width - game.ball.radius, game.ball.x));
    }
    
    const goalWidth = canvas.width * 0.5;
    const goalX = (canvas.width - goalWidth) / 2;
    
    // Top goal check (AI scores)
    if (game.ball.y <= game.ball.radius) {
        if (game.ball.x >= goalX && game.ball.x <= goalX + goalWidth) {
            game.player.score++;
            game.lastScorer = 'player';
            updateScore();
            if (game.player.score >= game.winScore) {
                endGame('Player Wins!');
            } else {
                resetBall('ai'); // Player scored, so AI serves next
            }
        } else {
            game.ball.vy *= -0.9;
            game.ball.y = game.ball.radius;
        }
    }
    
    // Bottom goal check (Player scores)  
    if (game.ball.y >= canvas.height - game.ball.radius) {
        if (game.ball.x >= goalX && game.ball.x <= goalX + goalWidth) {
            game.ai.score++;
            game.lastScorer = 'ai';
            updateScore();
            if (game.ai.score >= game.winScore) {
                endGame('Computer Wins!');
            } else {
                resetBall('player'); // AI scored, so Player serves next
            }
        } else {
            game.ball.vy *= -0.9;
            game.ball.y = canvas.height - game.ball.radius;
        }
    }
}

function checkPaddleCollision(paddle) {
    if (!game.gameRunning) return;
    
    const dx = game.ball.x - paddle.x;
    const dy = game.ball.y - paddle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < game.ball.radius + paddle.radius) {
        const angle = Math.atan2(dy, dx);
        const currentSpeed = Math.sqrt(game.ball.vx * game.ball.vx + game.ball.vy * game.ball.vy);
        const newSpeed = Math.min(currentSpeed * 1.15, game.ball.maxSpeed);
        
        game.ball.vx = Math.cos(angle) * newSpeed;
        game.ball.vy = Math.sin(angle) * newSpeed;
        
        const overlap = game.ball.radius + paddle.radius - distance;
        game.ball.x += Math.cos(angle) * overlap;
        game.ball.y += Math.sin(angle) * overlap;
    }
}

function updateAI() {
    if (!game.gameRunning) return;
    
    const aiSpeed = 7;
    const prediction = 0.4;
    
    let targetX = game.ball.x;
    
    // Predict ball movement for better AI
    if (game.ball.vy < 0 && game.ball.y < canvas.height * 0.7) {
        const timeToReach = Math.abs(game.ball.y - game.ai.y) / Math.abs(game.ball.vy);
        targetX = game.ball.x + (game.ball.vx * timeToReach * prediction);
        
        // Add some randomness to make AI beatable
        targetX += (Math.random() - 0.5) * 100 * (1 - game.aiDifficulty);
    }
    
    const distance = targetX - game.ai.x;
    
    if (Math.abs(distance) > 5) {
        const moveSpeed = Math.min(aiSpeed * game.aiDifficulty, Math.abs(distance) * 0.3);
        if (distance > 0) {
            game.ai.x += moveSpeed;
        } else {
            game.ai.x -= moveSpeed;
        }
    }
    
    // Keep AI in bounds
    game.ai.x = Math.max(game.ai.radius, Math.min(canvas.width - game.ai.radius, game.ai.x));
    game.ai.y = Math.max(game.ai.radius + 30, Math.min(canvas.height / 2 - 60, game.ai.y));
}

function handleInput(x, y) {
    // Check if clicking/touching the ball to start
    if (!game.gameRunning) {
        const ballDistance = Math.sqrt(
            Math.pow(x - game.ball.x, 2) + Math.pow(y - game.ball.y, 2)
        );
        
        if (ballDistance < game.ball.radius + 30) {
            startBallMovement('player');
            return;
        }
    }
    
    // Move player paddle (only in bottom half)
    if (y > canvas.height / 2) {
        game.player.x = x;
        game.player.y = y;
        
        game.player.x = Math.max(game.player.radius, Math.min(canvas.width - game.player.radius, game.player.x));
        game.player.y = Math.max(canvas.height / 2 + 60, Math.min(canvas.height - game.player.radius - 30, game.player.y));
    }
}

// Touch events
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    handleInput(x, y);
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    handleInput(x, y);
});

// Mouse events
canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    handleInput(x, y);
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    if (y > canvas.height / 2) {
        handleInput(x, y);
    }
});

function updateScore() {
    document.getElementById('playerScore').textContent = game.player.score;
    document.getElementById('aiScore').textContent = game.ai.score;
}

function endGame(winnerText) {
    game.gameRunning = false;
    document.getElementById('winnerText').textContent = winnerText;
    document.getElementById('gameOver').style.display = 'flex';
}

function restartGame() {
    game.player.score = 0;
    game.ai.score = 0;
    game.player.x = canvas.width / 2;
    game.player.y = canvas.height * 0.85;
    game.ai.x = canvas.width / 2;
    game.ai.y = canvas.height * 0.15;
    game.gameStarted = false;
    game.lastScorer = null;
    resetBall();
    updateScore();
    document.getElementById('gameOver').style.display = 'none';
}

function gameLoop() {
    updateBall();
    updateAI();
    checkPaddleCollision(game.player);
    checkPaddleCollision(game.ai);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw everything
    drawField();
    drawPaddle(game.player, '#ff0066', true);
    drawPaddle(game.ai, '#00ff66', false);
    drawBall();
    
    requestAnimationFrame(gameLoop);
}
const restartGameAgain = document.getElementById('restart-game')
    restartGameAgain.addEventListener('click', function() {
    restartGame();
});

// Initialize game
updateScore();
resetBall();
gameLoop();
})