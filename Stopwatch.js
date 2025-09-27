const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let timer = false;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timeout;

function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

function updateDisplay() {
    document.getElementById('hr').textContent = formatNumber(hour);
    document.getElementById('min').textContent = formatNumber(minute);
    document.getElementById('sec').textContent = formatNumber(second);
    document.getElementById('count').textContent = formatNumber(count);
}

function stopWatch() {
    if (!timer) return;

    count++;
    if (count === 100) {
        count = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }

    updateDisplay();
    timeout = setTimeout(stopWatch, 10);
}

startBtn.addEventListener('click', () => {
    if (!timer) {
        timer = true;
        stopWatch();
    }
});

stopBtn.addEventListener('click', () => {
    timer = false;
    clearTimeout(timeout);
});

resetBtn.addEventListener('click', () => {
    timer = false;
    clearTimeout(timeout);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
});
