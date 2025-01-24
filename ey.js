// Alphabet Inverted Right-Angled Triangle

function alphabetInvertedTriangle(n) {
    let charCode = 65;  // ASCII value of 'A'
    for (let i = n; i >= 1; i--) {
        let alphabets = '';
        for (let j = 0; j < i; j++) {
            alphabets += String.fromCharCode(charCode + j) + ' ';
        }
        console.log(alphabets);
    }
}

alphabetInvertedTriangle(5); 