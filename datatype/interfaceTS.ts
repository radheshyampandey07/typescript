type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function orderChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: {
    type: string;
    sugar: number;
    strong: boolean
}) {
    console.log(order);
}

type teaRecepie = {
    water: number
    milk: number
}

class Chai implements teaRecepie {
    water = 250
    milk = 150
}

