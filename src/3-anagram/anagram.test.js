const { anagram } = require('./anagram');

test('friend is an anagram of finder', () => {
  expect(
    anagram('friend', 'finder')
  ).toBe(true);
});

test('elbow is an anagram of below', () => {
  expect(
    anagram('elbow', 'below')
  ).toBe(true);
});

test('heat is not an anagram of earth', () => {
  expect(
    anagram('heat', 'earth')
  ).toBe(false);
});
