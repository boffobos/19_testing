function digitCounter(digit, [min, max]) {
    //counts how many times digit appear at least once in numbers
    let count = 0;
    for(let i = min; i <= max; i++ ) {
        if (String(i).includes(digit)) count++;
    }
    return count;
}

module.exports = digitCounter;