// 1. typeof: for primitives (string, number, boolean)
function serve(chai: string | number): string {
    if (typeof chai === 'string') {
        return `Serving ${chai.toUpperCase()} tea`;      // string methods allowed
    }
    return `Serving ${chai.toFixed(1)} cups of tea`;     // number methods allowed
}

// 2. instanceof: for classes (each class has something unique)
class KulhadChai {
    serve() { return "Serving chai in kulhad"; }
    breakKulhad() { return "Kulhad broken after use"; }
}

class CuttingChai {
    serve() { return "Serving chai in cutting"; }
    washGlass() { return "Glass washed"; }
}

function afterServing(chai: KulhadChai | CuttingChai): string {
    if (chai instanceof KulhadChai) {
        return chai.breakKulhad();     // only exists on KulhadChai
    }
    return chai.washGlass();           // narrowed to CuttingChai
}

// 3. in operator: checks whether a property exists
type HotDrink = { temperature: number };
type ColdDrink = { ice: boolean };

function describeDrink(drink: HotDrink | ColdDrink): string {
    if ('temperature' in drink) {
        return `Hot drink at ${drink.temperature} C`;
    }
    return `Cold drink, ice: ${drink.ice}`;
}

// 4. Discriminated union: a shared "kind" field, plus an exhaustive check
type Payment =
    | { kind: 'cash'; amount: number }
    | { kind: 'upi'; id: string }
    | { kind: 'card'; last4: string };

function pay(payment: Payment): string {
    switch (payment.kind) {
        case 'cash':
            return `Paid ${payment.amount} in cash`;
        case 'upi':
            return `Paid via UPI ${payment.id}`;
        case 'card':
            return `Paid by card ending ${payment.last4}`;
        default: {
            // If you add a new kind and forget to handle it, this line gives a compile error
            const _exhaustive: never = payment;
            return _exhaustive;
        }
    }
}

// 5. Custom type guard: a function that returns "value is Type"
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function printLength(value: unknown): string {
    if (isString(value)) {
        return `Length: ${value.length}`;     // value is a string here
    }
    return 'Not a string';
}

// 6. Truthiness: removes null, undefined and empty values
function greet(name?: string | null): string {
    if (!name) {
        return 'Hello, guest';
    }
    return `Hello, ${name.trim()}`;           // name is a string here
}

// 7. Array.isArray: single value or array
function total(input: number | number[]): number {
    if (Array.isArray(input)) {
        return input.reduce((sum, n) => sum + n, 0);
    }
    return input;
}


type ChaiOrder = {
    type: string
    sugar: string
}


function isChaiOrder(obj: any): obj is ChaiOrder {

    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "string"
    )

}

function serveChai(item : ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return  `Serving custon chai ${item}`
}
// Output
console.log(serve('masala'));
console.log(serve(3));
console.log(afterServing(new KulhadChai()));
console.log(afterServing(new CuttingChai()));
console.log(describeDrink({ temperature: 80 }));
console.log(describeDrink({ ice: true }));
console.log(pay({ kind: 'cash', amount: 50 }));
console.log(pay({ kind: 'upi', id: 'radhe@upi' }));
console.log(pay({ kind: 'card', last4: '4242' }));
console.log(printLength('chai'));
console.log(printLength(42));
console.log(greet('  Radhe  '));
console.log(greet(null));
console.log(total([1, 2, 3]));
console.log(total(5));
console.log(serveChai("sugar"));                                // Serving custon chai sugar
console.log(serveChai({ type: "masala", sugar: "less" }));      // Serving masala chai with less sugar
console.log(serveChai({ type: "ginger", sugar: "none" }));      // Serving ginger chai with none sugar