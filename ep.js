// Inverted Right-Angled Triangle Pattern

function invertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}

invertedTriangle(5);