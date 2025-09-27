var game, level, color = ["red", "blue", "yellow", "green", "purple", "lightgreen", "lightblue", "orange", "brown", "pink"];
var water = [], w = [], currentLevel, clicked = [], transferring = false, t = false, size = 1, sizechange = 0.05, won = false, moves = 0;

var testTubePosition = {
    0: [[-110, 130], [-20, 130], [70, 130], [-65, 320], [15, 320]],
    1: [[-110, 130], [-20, 130], [70, 130], [-110, 320], [-20, 320], [70, 320]],
    2: [[-140, 130], [-60, 130], [20, 130], [100, 130], [-110, 320], [-20, 320], [70, 320]],
    3: [[-140, 130], [-60, 130], [20, 130], [100, 130], [-140, 320], [-60, 320], [20, 320], [100, 320]],
    7: [[-140, 100], [-60, 100], [20, 100], [100, 100], [-140, 275], [-60, 275], [20, 275], [100, 275], [-140, 450], [-60, 450], [20, 450], [100, 450]]
};

window.onload = function () {
    game = document.getElementById("game");
    level = document.getElementById("level");
};

window.OpenLevel = function (x) {
    moves = 0;
    currentLevel = x;
    won = false;
    level.style.display = "block";
    level.innerHTML = "";
    water = [];

    let colorPool = generateColorPool(x);
    water = populateWaterArray(colorPool);
    water.push(["transparent", "transparent", "transparent", "transparent"], ["transparent", "transparent", "transparent", "transparent"]);
    w = water.map(a => [...a]);

    ApplyInfo();
};

function generateColorPool(level) {
    let colorPool = [];
    for (let i = 0; i < level + 3; i++) {
        for (let j = 0; j < 4; j++) {
            colorPool.push(color[i]);
        }
    }
    return shuffle(colorPool);
}

function populateWaterArray(colorPool) {
    let waterArray = [];
    let c = 0;
    for (let i = 0; i < currentLevel + 3; i++) {
        waterArray[i] = [];
        for (let j = 0; j < 4; j++) {
            waterArray[i].push(colorPool[c]);
            c++;
        }
    }
    return waterArray;
}

function ApplyInfo(a = water) {
    if (!won) {
        let levelNames = ["EASY", "MEDIUM", "HARD", "VERY HARD", "", "", "", "IMPOSSIBLE"];
        let heading = levelNames[currentLevel];
        level.innerHTML = `<div id="lvl-heading">${heading}</div>`;

        a.forEach((testTube, index) => {
            level.innerHTML += `
                <div class="test-tube" style="top:${testTubePosition[currentLevel][index][1]}px; left:calc(50vw + ${testTubePosition[currentLevel][index][0]}px);" onclick="Clicked(${index});">
                    ${testTube.map((color, idx) => `<div class="colors" style="background-color:${color};top:${100 - (idx * 30)}px;"></div>`).join('')}
                </div>`;
        });

        level.innerHTML += `
            <div id="restart" class="game-buttons" onclick="Restart();">RESTART</div>
            <div id="home" class="game-buttons" onclick="ShowMenu();">HOME</div>
            <div id="moves">Moves: ${moves}</div>`;
    }
}

window.Clicked = function (x) {
    if (!transferring) {
        if (clicked.length === 0) {
            clicked.push(x);
            let testTube = document.getElementsByClassName("test-tube")[x];
            testTube.style.transition = "0.2s linear";
            testTube.style.transform = "scale(1.08)";
        } else {
            clicked.push(x);
            let el = document.getElementsByClassName("test-tube")[clicked[0]];
            el.style.transform = "scale(1) rotate(0deg)";

            if (clicked[0] !== clicked[1]) {
                el.style.transition = "1s linear";
                moves++;
                document.getElementById("moves").innerHTML = `Moves: ${moves}`;
                Transfer(...clicked);
            }
            clicked = [];
        }
    }
};

function Transfer(a, b) {
    if (!water[b].includes("transparent") || water[a] === ["transparent", "transparent", "transparent", "transparent"]) {
        moves--;
        document.getElementById("moves").innerHTML = `Moves: ${moves}`;
        return;
    }

    let p = findNonTransparentWater(a);
    let q = findEmptySlot(b);

    if (q[0] !== "transparent" && p[0] !== q[0]) {
        moves--;
        document.getElementById("moves").innerHTML = `Moves: ${moves}`;
        return;
    }

    let count = transferWater(p, a, q, b);
    setTimeout(() => ApplyInfo(), 3020);
    setTimeout(() => TransferAnim(a, b), 10);
    setTimeout(Won, 3000);
}

function findNonTransparentWater(a) {
    for (let i = 0; i < 4; i++) {
        if (water[a][i] !== "transparent" && (i === 3 || water[a][i + 1] === "transparent")) {
            return [water[a][i], i];
        }
    }
    return [];
}

function findEmptySlot(b) {
    for (let i = 0; i < 4; i++) {
        if (water[b][i] === "transparent" || water[b][i + 1] === "transparent") {
            return [water[b][i], i, water[b].filter(x => x === "transparent").length];
        }
    }
    return [];
}

function transferWater(p, a, q, b) {
    let count = 0;
    for (let i = 3; i >= 0; i--) {
        if ((water[a][i] === p[0] || water[a][i] === "transparent") && count < q[2]) {
            if (water[a][i] === p[0]) count++;
            water[a][i] = "transparent";
        } else {
            break;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (water[b][i] === "transparent" && count > 0) {
            count--;
            water[b][i] = p[0];
        }
    }
    return count;
}

function TransferAnim(a, b) {
    let el = document.getElementsByClassName("test-tube")[a];
    transferring = true;
    el.style.zIndex = "100";
    el.style.top = `${testTubePosition[currentLevel][b][1] - 90}px`;
    el.style.left = `calc(50vw + ${testTubePosition[currentLevel][b][0] - 70}px)`;
    el.style.transform = "rotate(75deg)";
    setTimeout(() => { el.style.transform = "rotate(90deg)"; }, 1000);
    setTimeout(() => {
        el.style.left = `calc(50vw + ${testTubePosition[currentLevel][a][0]}px)`;
        el.style.top = `${testTubePosition[currentLevel][a][1]}px`;
        el.style.transform = "rotate(0deg)";
    }, 2000);
    setTimeout(() => { el.style.zIndex = "0"; transferring = false; }, 3000);
}

window.Restart = function () {
    moves = 0;
    water = w.map(a => [...a]);
    won = false;
    ApplyInfo(w);
};

window.ShowMenu = function () {
    document.getElementById("level").style.display = "none";
};

function Won() {
    if (water.every(tube => tube[0] === tube[1] && tube[1] === tube[2] && tube[2] === tube[3])) {
        won = true;
        level.innerHTML = `
            <div id="won">YOU WON</div>
            <div id="restart" class="game-buttons" onclick="Restart();">RESTART</div>
            <div id="home" class="game-buttons" onclick="ShowMenu();">HOME</div>`;
    }
}

function shuffle(x) {
    let a = [], len = x.length;
    while (x.length) {
        let n = Math.floor(Math.random() * x.length);
        a.push(x.splice(n, 1)[0]);
    }
    return a;
}

window.ShowRules = function () {
    document.getElementById("rules-page").style.display = "block";
    setTimeout(() => {
        document.getElementById("rules-page").style.opacity = "1";
    }, 50);
};

window.HideRules = function () {
    setTimeout(() => {
        document.getElementById("rules-page").style.display = "none";
    }, 500);
    document.getElementById("rules-page").style.opacity = "0";
};
