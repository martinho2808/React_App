// Mutable Function

const person = {
  firstName: "Steven",
  lastName: "Rodgers",
};

function giveAwesomePowers(person) {
  person.specialPower = "Super Human Strength";
  return person;
}

console.log(person); // { firstName: "Steven", lastName: "Rodgers"}

giveAwesomePowers(person);

console.log(person); // { firstName: "Steven", lastName: "Rodgers", specialPower: 'Super Human Strength'}

// Immutable Function

// const person = {
//   firstName: "Steven",
//   lastName: "Rodgers",
// };

// function giveAwesomePowersImmutable(person) {
//   let newPerson = { ...person, specialPower: "Super Human Strength" };
//   return person;
// }

// console.log(person); // { firstName: "Steven", lastName: "Rodgers"}

// console.log(giveAwesomePowers(person));

// console.log(person); // { firstName: "Steven", lastName: "Rodgers", specialPower: 'Super Human Strength'}
