let drink = "chai"; // once you declare a variable with a type, you cannot change its type later

console.log(drink); // Output: chai


let cups = Math.random() > 2 ? 10 : 5;
console.log(cups);

let chaiflavor: String = "masala tea";
chaiflavor = "ginger";


let chaiOrder: number = 10;

let order : boolean = true;

// union and any

let subscriber : number | string = 1000000;

subscriber = "10M";

let apiRequest : 'pending' | 'success' | 'failed' = 'pending';

apiRequest = 'pending'  ;
// apiRequest = 'not available';

let orders = ['10', '20', '30', '40', '50', '60'];

let currentOrder : string;

for(let order of orders){

    if(order  == '40'){
        currentOrder = order;
        break;
    }

}



