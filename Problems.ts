// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.

const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Clara", age: 22, gender: "female" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eva", age: 35, gender: "female" },
    { name: "Frank", age: 40, gender: "male" }
];

const filterPeople = (peopleArray) => {
    const females = peopleArray.filter((person) => person.gender !== 'female')
    const femaleNames = females.map((female) => female.name)
    console.log(femaleNames);
}

filterPeople(people)


// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const squareNumber = (number) => {
    return number * number;
}
const doubleNumber = (number) => {
    return number * 2;
}
const addFiveToNum = (number) => {
    return number + 5;
}

const finalFunc = (number) => {
    const squared = squareNumber(number)
    const doubled = doubleNumber(squared)
    const added = addFiveToNum(doubled)
    return added;
}

const finalNumber = finalFunc(5)
console.log(finalNumber);



// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
    { make: "Toyota", model: "Corolla", year: 2018 },
    { make: "Honda", model: "Civic", year: 2016 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevrolet", model: "Malibu", year: 2015 },
    { make: "BMW", model: "X5", year: 2019 }
];
const sortCarByYear = cars.sort((a, b) => a.year - b.year)
console.log(sortCarByYear);


// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const peopleArray = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Clara", age: 22, gender: "female" },
    { name: "David", age: 28, gender: "male" },
    { name: "Eva", age: 35, gender: "female" }
];

const searcPeopleArrayByName = (personName, peopleArray, newAge) => {
    const exisitngPerson = peopleArray.find((p) => p.name === personName)
    if (exisitngPerson) {
        exisitngPerson.age = newAge
        return peopleArray;
    } else {
        return 'no person found!'
    }
}
const searchRes = searcPeopleArrayByName('Ev0a', peopleArray, 5)
console.log(searchRes);


// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1, 4, 7, 10, 13, 16, 19, 22];

const sumOfNumbers = numbers.reduce((acc, current) => (acc + current), 0)
console.log(sumOfNumbers);



// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

const cartItems = [
    { name: "Laptop", quantity: 1, price: 800 },
    { name: "Mouse", quantity: 2, price: 25 },
    { name: "Keyboard", quantity: 1, price: 50 },
    { name: "Monitor", quantity: 2, price: 200 }
];

const totalPriceUsingReducer = cartItems.reduce((acc, current) => acc + current.quantity * current.price, 0)
console.log(totalPriceUsingReducer);