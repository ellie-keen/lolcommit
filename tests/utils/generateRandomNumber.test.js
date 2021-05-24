const generateRandomNumber = require('../../utils/generateRandomNumber');

test('generateRandomNumber returns a random value under the maxValue', () => {
  expect(generateRandomNumber.generateRandomNumber(10)).toBeLessThan(10);
});
