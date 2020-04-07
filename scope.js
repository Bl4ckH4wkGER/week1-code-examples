console.log('Scope!');



// scope
let fruit = 'clementine';
console.log(fruit);

function printAVeggie() {
    var veggie = 'spinach';
    console.log(veggie);
}

printAVeggie();


// higher order function
function getCircleArea(r, pi) {
    return pi * (r * r);
}

console.log(getCircleArea(2, 3.14));

function generateCircleAreaFunction(pi) {
    return function(r) {
        return pi * (r * r);
    };
}

const basicArea = generateCircleAreaFunction(3.14);
console.log(basicArea(2));

const preciseArea = generateCircleAreaFunction(3.14159265358979);
console.log(preciseArea(2));

// function references + passing functions as arguments
function work() {
    console.log('work!');
}

function executor(fn) {
    console.log(fn);
    fn();
    fn();
    fn();
}

executor(work);
executor(work);