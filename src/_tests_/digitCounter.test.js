const digitCounter = require('../digitCounter.js');

describe('', () => {
    it('counts numbers containing some digit', () => {
        const result = digitCounter(3, [0, 1000]);
        expect(result).toBe(271);
    })
});