"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nums = [1, 12, 13, 24, 5];
console.log("Numbers are: " + nums);
var names = ["John", "Jane", "Doe"];
console.log("Names are: " + names);
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array must not be empty");
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];
        if (current > largest) {
            largest = current;
        }
    }
    return largest;
}
const largestNumber = findLargestNumber(nums);
console.log("Largest number is: " + largestNumber);
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array must not be empty");
    }
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        if (current < smallest) {
            smallest = current;
        }
    }
    return smallest;
}
const smallestNumber = findSmallestNumber(nums);
console.log("Smallest number is: " + smallestNumber);
