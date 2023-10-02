"use strict"

// TASK 1
console.log("Task 1");
// Write a program that prompts the user to enter
//  five numbers and stores
// them in an array. Then, output the sum of the
//  numbers to the console

let num = [];
for(let i=0; i < 5; i++){
    let value = Number(prompt("Enter a number"));
    num.push(value);
}
console.log(`The numbers are: ${num}`);
let sum=0;
for (let i = 0; i < num.length; i++) {
    sum = sum +num[i];
}
console.log(`Sum of all numbers is : ${sum}`);

// TASK 2
console.log("Task 2");
// Write a function called findMax that takes in an array
//  of numbers as a
// parameter and returns the largest number in the array.

function findMax(numbers) {
    let largest = 0;
    // itrating over the array 
    for(let i= 0; i< numbers.length; i++){
        console.log(numbers[i]);
        // checking ecah element of array 
        if (numbers[1] > largest) {
            largest = numbers[i];
        } 
    }
    return largest;
};
let array = [90, 83, 34, 99, 10];

let max = findMax(array);
console.log(`Largest number in the array is : ${max}`);

// TASK 3
console.log("Task 3");
// Write a program that prompts the user to enter a sentence and stores
// each word in an array. Then, output the length of the array to the
// console.

let string = prompt("Enter a sentence");
console.log(`The sentence is: ${string}`);
let arr = [];

let words = string.split(' ');

for (const word of words) {
        arr.unshift(word);
}

let arrLength = arr.length;
console.log(`Number of words in the sentence is : ${arrLength}`);


// TASK 4
console.log("Task 4");
// Write a program to take an array and print average of all the elements of
// array.

let numberArray = [3, 4, 10, 20, 43];
console.log(`The numbers are: ${numberArray}`);
let average = 0;

for (let i = 0; i < numberArray.length; i++) {
    average = (average + numberArray[i])/numberArray.length;

}
console.log(`The average of the numbers is = ${average}`);


// TASK 5
console.log("Task 5");
// Write a program to output only those elements who are multiple of
// three(3) or five(5).

let numArray =  [30, 22, 10, 9, 14, 25];
let arrayOf = [];
console.log(`The numbers are: ${numArray}`);
for (let i = 0; i < numArray.length; i++) {
    let multipleOf = numArray[i];
    if (multipleOf % 3 === 0 || multipleOf % 5 === 0 ) {
        arrayOf.push(multipleOf);
    }
};
console.log(`The number those are multiple of 3 or 5 are: ${arrayOf}`);

