// Diamond Pattern

function diamond(n) {
    // Upper part of the diamond
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
    // Lower part of the diamond
    for (let i = n - 1; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

diamond(5);