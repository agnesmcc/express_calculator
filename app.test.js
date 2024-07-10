const {mean, median, mode} = require('./math');

test('mean should return the mean', () => {
    expect(mean([1, 2, 3])).toBe(2);
})

test('median should return the median', () => {
    expect(median([1, 2, 3, 5, 6])).toBe(3);
})

test('mode should return the mode', () => {
    expect(mode([1, 2, 2, 3])).toBe(2);
})

