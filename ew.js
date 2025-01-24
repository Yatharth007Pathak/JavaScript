// Inverted Alphabet Pyramid Pattern

function invertedAlphabetPyramid(n) {
    let charCode = 65;  // ASCII value of 'A'
    for (let i = n; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);
        let alphabets = '';
        for (let j = 0; j < i; j++) {
            alphabets += String.fromCharCode(charCode + j) + ' ';
        }
        console.log(spaces + alphabets);
    }
}

invertedAlphabetPyramid(5); 