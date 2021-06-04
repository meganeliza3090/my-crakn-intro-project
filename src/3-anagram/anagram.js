// Write a function that returns true if the two words are an anagram of eachother.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
exports.anagram = function (firstWord, secondWord) {
  let a = firstWord.split("").sort().join("");
  let b = secondWord.split("").sort().join("");

  return (a === b) ? true : false;
}