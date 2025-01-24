// Number Triangle

function numberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i;  // Append the number 'i' repeatedly
        }
        console.log(row);
    }
}

numberTriangle(5);