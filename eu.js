// Reverse Number Triangle Pattern

function reverseNumberTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j + ' ';
        }
        console.log(numbers.trim());
    }
}

reverseNumberTriangle(5);