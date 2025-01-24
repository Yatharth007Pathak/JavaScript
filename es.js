// Inverted Number Pyramid

function invertedNumberPyramid(n) {
    for (let i = n; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j + ' ';
        }
        console.log(spaces + numbers);
    }
}

invertedNumberPyramid(5);