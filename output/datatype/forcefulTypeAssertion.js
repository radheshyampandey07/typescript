"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "hello wrold";
let stringLength = response.length;
console.log(stringLength);
let bookString = '{"name": "Career advice " }';
let bookObj = JSON.parse(bookString);
console.log(bookObj.name);
