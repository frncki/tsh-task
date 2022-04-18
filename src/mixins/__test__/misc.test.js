import { isInRange, randomInt } from "../misc";

describe('isInRange', () => {
    it('POSITIVE - returns true if given values are in range', () => {
        const val1 = 144;
        const val2 = 169;
        const range = 25;
        const inRange = isInRange(val1, val2, range);

        expect(inRange).toEqual(true);
    });

    it('NEGATIVE - returns false if given values are not in range', () => {
        const val1 = 144;
        const val2 = 169;
        const range = 16;
        const inRange = isInRange(val1, val2, range);

        expect(inRange).toEqual(false);
    });
});

describe('randomInt', () => {
    it('POSITIVE - returns number between given range', () => {
        const min = 144;
        const max = 169
        const randomNumber = randomInt(min, max);

        expect(typeof randomNumber).toEqual('number');
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });
});
