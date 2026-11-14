const chaiFlavours: string[] = ["masala", "ginger", "plain"];

let chaiPrice: number[] = [20, 25];

const rating: Array<number> = [3.5, 5, 7, 8.5]

type flavour = {
    name: string,
    price: number
}

const chaiMenu: flavour[] = [
    { name: "masala", price: 25 },
    { name: "ginger", price: 20 },
    { name: "palin", price: 15 }
]

console.log(chaiFlavours);
console.log(chaiPrice);
console.log(rating);
console.log(chaiMenu);

let empNames: string[] = ["radhe", "shyam", "gyan", "kishan", "priya"];
let empIds: Array<number> = [1, 21, 34, 5, 23];
let empdata: Array<number | string> = ["radhe", 3, "kishan", "priya"];

console.log("Employee name ---------");
// 1. traditional for loop

for (let i: number = 0; i < empNames.length; i++) {
    console.log(empNames[i]);

}

// 2. using in operator
console.log("Employee ids......");

for (let i in empIds) {
    console.log(empIds[i]);

}

// 3. of operator
for (let value of empdata) {
    console.log(value);
}

type Employee = {
    id: number,
    name: string,
    salary: number
}

let empData: Employee[] = [
    { id: 1, name: "radhe shyam", salary: 89001 },
    { id: 2, name: "amit kumar", salary: 75000 },
    { id: 3, name: "priya sharma", salary: 92000 }
]

for (let i in empData) {
    console.log(empData[i].name);
}

const numbers: number[] = [3, 2, 9, 6, 8, 10];
function search(ele: number, arr: number[]): boolean {

    for (let i in arr) {
        if (ele === arr[i]) {
            return true;
        }
    }

    return false;
}

console.log(search(89, numbers));


console.log("find square of every number in an array");

function square(arr: number[]): number[] {
    let sqr: number[] = [];
    for (let i in arr) {
        sqr[i] = arr[i] * arr[i];
    }

    return sqr;
}

console.log(square(numbers));


// convert string to uppercase

function upperCase(names: string[]): string[] {
    let uppercaseNames: string[] = [];
    for (let i in names) {
        uppercaseNames[i] = names[i].toUpperCase();
    }

    return uppercaseNames;
}

console.log(upperCase(empNames));

let chaiTuple: [string, number];
chaiTuple = ["Chai", 25];
console.log(chaiTuple);

// chaiTuple = ["Coffee", 30, "Masala Chai", 15]; // this is a error bcz tuple has fixed size as defined at declartion


let chaimenu : [name : string,price : number];

chaimenu = ["ginger chai", 20];

console.log(chaimenu);

chaimenu.push("hello");

console.log(chaimenu);


// enum

enum cupsize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

let haveChai : cupsize = cupsize.SMALL;

console.log(haveChai);

enum price {
    small = 10,
    medium = 20,
    large
}

let iselect = price.large;

console.log(iselect);
