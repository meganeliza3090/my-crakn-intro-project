const { age } = require('./calculate-age');

test('age 01/21/1994 to 06/01/2021 to equal 27', () => {
  expect(
    age(new Date(1994, 1, 21), new Date(2021, 6, 1))
  ).toBe(27);
});

test('age 08/20/1989 to 06/01/2021 to equal 31', () => {
  expect(
    age(new Date(1989, 8, 20), new Date(2021, 6, 1))
  ).toBe(31);
});
