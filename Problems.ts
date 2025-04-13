// 1. Filter out all females and map the remaining people to an array of names
const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Clara", age: 22, gender: "female" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eva", age: 35, gender: "female" },
    { name: "Frank", age: 40, gender: "male" }
];

const getNonFemaleNames = (peopleArray) => {
    const nonFemales = peopleArray.filter(person => person.gender !== 'female');
    const names = nonFemales.map(person => person.name);
    console.log('Solution of Problem 1:', names);
};

getNonFemaleNames(people); // Output: [ 'Bob', 'David', 'Frank' ]


// 2. Compose functions to square a number, double it, then add 5
const squareNumber = (number) => number * number;
const doubleNumber = (number) => number * 2;
const addFive = (number) => number + 5;

const composeFinalResult = (number) => {
    return addFive(doubleNumber(squareNumber(number)));
};

console.log('Solution of Problem 2:', composeFinalResult(5)); // Output: 55


// 3. Sort an array of cars by year (ascending)
const cars = [
    { make: "Toyota", model: "Corolla", year: 2018 },
    { make: "Honda", model: "Civic", year: 2016 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevrolet", model: "Malibu", year: 2015 },
    { make: "BMW", model: "X5", year: 2019 }
];

const sortCarsByYear = (carArray) => {
    return carArray.sort((a, b) => a.year - b.year);
};

console.log('Solution of Problem 3:', sortCarsByYear(cars));


// 4. Search for a person by name and update their age
const peopleArray = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Clara", age: 22, gender: "female" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eva", age: 35, gender: "female" }
];

const updatePersonAgeByName = (name, array, newAge) => {
    const person = array.find(p => p.name === name);
    if (person) {
        person.age = newAge;
        return array;
    } else {
        return 'No person found!';
    }
};

console.log('Solution of Problem 4:', updatePersonAgeByName('Eva', peopleArray, 26));


// 5. Sum all even numbers in an array using reduce
const numbers = [1, 4, 7, 10, 13, 16, 19, 22];

const sumEvenNumbers = (array) => {
    return array.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
};

console.log('Solution of Problem 5:', sumEvenNumbers(numbers)); // Output: 52
