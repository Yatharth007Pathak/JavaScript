// Alphabet Pyramid Pattern

function alphabetPyramid(n) {
    let charCode = 65;  // ASCII value of 'A'
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let alphabets = '';
        for (let j = 0; j < i; j++) {
            alphabets += String.fromCharCode(charCode + j) + ' ';
        }
        console.log(spaces + alphabets);
    }
}

alphabetPyramid(5);