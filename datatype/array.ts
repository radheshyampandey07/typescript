let nums: number[] = [1, 12, 13, 24, 5];

console.log("Numbers are: " + nums);
var names = ["John", "Jane", "Doe"];
console.log("Names are: " + names);

function findLargestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array must not be empty");
    }

    let largest: number = numbers[0]!;
    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i]!;
        if (current > largest) {
            largest = current;
        }
    }

    return largest;
}

const largestNumber = findLargestNumber(nums);
console.log("Largest number is: " + largestNumber);


function findSmallestNumber(numbers: number[]): number {

    if (numbers.length === 0) {
        throw new Error("The array must not be empty");
    }
    let smallest: number = numbers[0]!;
    for (let i = 0; i < numbers.length; i++) {

        const current = numbers[i]!;
        if (current < smallest) {
            smallest = current;
        }
    }

    return smallest;
}


const smallestNumber = findSmallestNumber(nums);
console.log("Smallest number is: " + smallestNumber);
