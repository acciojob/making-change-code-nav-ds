function makeChange(amount) {
    // Initialize the result object
    let change = { q: 0, d: 0, n: 0, p: 0 };

    // Calculate quarters
    change.q = Math.floor(amount / 25);
    amount = amount % 25;

    // Calculate dimes
    change.d = Math.floor(amount / 10);
    amount = amount % 10;

    // Calculate nickels
    change.n = Math.floor(amount / 5);
    amount = amount % 5;

    // Remaining pennies
    change.p = amount;

    return change;
}

// Example usage
console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }

module.exports = makeChange;
