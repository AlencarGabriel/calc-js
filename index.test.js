const { sum } = require('./index');

test('sums two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
