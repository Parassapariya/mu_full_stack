let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

// Filter numbers greater than 5
let bigNumbers = numbers.map(number => number > 5);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(bigNumbers); // [6, 7, 8, 9, 10]