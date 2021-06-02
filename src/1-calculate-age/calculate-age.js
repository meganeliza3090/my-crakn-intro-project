// Write a function that returns the current age of the person in years.
exports.ageAtDeath = function (birthDate, deathDate) {
  birthDate = new Date(birthDate);
  deathDate = new Date(deathDate);

  let age = (deathDate.getFullYear() - birthDate.getFullYear());

  if (deathDate.getMonth() < birthDate.getMonth() || deathDate.getMonth() == birthDate.getMonth() && deathDate.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
}