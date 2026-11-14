"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let drink = "chai"; // once you declare a variable with a type, you cannot change its type later
console.log(drink); // Output: chai
let cups = Math.random() > 2 ? 10 : 5;
console.log(cups);
let chaiflavor = "masala tea";
chaiflavor = "ginger";
let chaiOrder = 10;
let order = true;
// union and any
let subscriber = 1000000;
subscriber = "10M";
let apiRequest = 'pending';
apiRequest = 'pending';
// apiRequest = 'not available';
let orders = ['10', '20', '30', '40', '50', '60'];
let currentOrder;
for (let order of orders) {
    if (order == '40') {
        currentOrder = order;
        break;
    }
}
