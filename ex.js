// Number Hollow Pyramid

function numberHollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let numbers = '';
        for (let j = 1; j <= (2 * i - 1); j++) {
            if (j === 1 || j === (2 * i - 1)) {
                numbers += j + ' ';
            } else {
                numbers += '  ';
            }
        }
        console.log(spaces + numbers);
    }
}

numberHollowPyramid(5); 
