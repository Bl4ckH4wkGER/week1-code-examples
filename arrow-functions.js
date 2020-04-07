// function exampleWithArguments() {
//     console.log(arguments);
// }

const shoppingList = [
    'apples',
    'eggs',
    'easter chocolate',
    'ham',
    'spinach'
];

// shoppingList.forEach(function(item) {
//     console.log(item);
// });

// shoppingList.forEach(item => console.log(item));

// console.log(
//     shoppingList.map(item => item.toUpperCase())
// );

// shoppingList.forEach((item) => console.log(item));

// shoppingList.forEach((item, idx) => console.log(idx, item));

function Announcer() {
    this.message = 'Message to announce';

    setTimeout(() => console.log(this.message), 1000);
}

const announcer = new Announcer();
announcer.message = 'A new message';
