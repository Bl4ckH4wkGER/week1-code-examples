const person = {
    name: 'John',
    age: 43,
    favoriteColor: 'red'
};

// const name = person.name;
// const age = person.age;
// const color = person.favoriteColor;

const {
    name,
    age = '(no age available)',
    favoriteColor: color
} = person;

// console.log(name, age, color);


// const [first, middle, last] = 'Brian Andrew Hague'.split(' ');
// console.log(first, middle, last);

// const {
//     favoriteColor,
//     ...newPerson
// } = person;
// console.log(favoriteColor);
// console.log(newPerson);


const personWithAddress = {
    ...person,
    address: '123 Main St.'
};
console.log(personWithAddress);