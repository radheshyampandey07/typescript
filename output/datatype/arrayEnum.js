"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["masala", "ginger", "plain"];
let chaiPrice = [20, 25];
const rating = [3.5, 5, 7, 8.5];
const chaiMenu = [
    { name: "masala", price: 25 },
    { name: "ginger", price: 20 },
    { name: "palin", price: 15 }
];
console.log(chaiFlavours);
console.log(chaiPrice);
console.log(rating);
console.log(chaiMenu);
let empNames = ["radhe", "shyam", "gyan", "kishan", "priya"];
let empIds = [1, 21, 34, 5, 23];
let empdata = ["radhe", 3, "kishan", "priya"];
console.log("Employee name ---------");
// 1. traditional for loop
for (let i = 0; i < empNames.length; i++) {
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
let empData = [
    { id: 1, name: "radhe shyam", salary: 89001 },
    { id: 2, name: "amit kumar", salary: 75000 },
    { id: 3, name: "priya sharma", salary: 92000 }
];
for (let i in empData) {
    console.log(empData[i].name);
}
const numbers = [3, 2, 9, 6, 8, 10];
function search(ele, arr) {
    for (let i in arr) {
        if (ele === arr[i]) {
            return true;
        }
    }
    return false;
}
console.log(search(89, numbers));
console.log("find square of every number in an array");
function square(arr) {
    let sqr = [];
    for (let i in arr) {
        sqr[i] = arr[i] * arr[i];
    }
    return sqr;
}
console.log(square(numbers));
// convert string to uppercase
function upperCase(names) {
    let uppercaseNames = [];
    for (let i in names) {
        uppercaseNames[i] = names[i].toUpperCase();
    }
    return uppercaseNames;
}
console.log(upperCase(empNames));
let chaiTuple;
chaiTuple = ["Chai", 25];
console.log(chaiTuple);
// chaiTuple = ["Coffee", 30, "Masala Chai", 15]; // this is a error bcz tuple has fixed size as defined at declartion
let chaimenu;
chaimenu = ["ginger chai", 20];
console.log(chaimenu);
chaimenu.push("hello");
console.log(chaimenu);
// enum
var cupsize;
(function (cupsize) {
    cupsize["SMALL"] = "small";
    cupsize["MEDIUM"] = "medium";
    cupsize["LARGE"] = "large";
})(cupsize || (cupsize = {}));
let haveChai = cupsize.SMALL;
console.log(haveChai);
var price;
(function (price) {
    price[price["small"] = 10] = "small";
    price[price["medium"] = 20] = "medium";
    price[price["large"] = 21] = "large";
})(price || (price = {}));
let iselect = price.large;
console.log(iselect);
