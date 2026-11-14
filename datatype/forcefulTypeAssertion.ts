let response : any  = "hello wrold"


let stringLength: number  = (response as string).length;

console.log(stringLength)

type Book = {
    name : string
}

let bookString = '{"name": "Career advice " }';

let bookObj = JSON.parse(bookString) as Book

console.log(bookObj.name);

